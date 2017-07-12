import glob from "glob";
import each from "async/each";
import fs from "fs-extra";
import handlebars from "handlebars";

console.log("Cleaning directories...");
if (!fs.existsSync("build/generator/frontend/src/components")) {
    fs.mkdirSync("build/generator/frontend/src/components");
} else {
    fs.emptyDirSync("build/generator/frontend/src/components");
    fs.rmdirSync("build/generator/frontend/src/components");
    fs.mkdirSync("build/generator/frontend/src/components");
}

/**
 * Formats some content in such a way that it will be stored as a variable named varName according to the conventions
 * of the documentation, i.e. each line is an array item and it will be joined together. Newlines are replaced with
 * a unescaped newline "\\n"
 * @param fileContent
 * @param varName
 * @returns {string}
 */
function preformatContent(fileContent, varName) {
    const formatted = [];
    fileContent.split("\n").forEach((line) => {
        formatted.push(`'${line.replace(/[']/g, "\\'")}\\n'`);
    });
    return `const ${varName} = [${formatted}].join("");`;
}

/**
 * Get the path + the base name of a component. The base name is the entire name without the extension. This helps
 * categorizing all files belonging to a component since multiple files can belong to a component. In this case
 * only the extension differs.
 * @param fileName
 * @returns {string}
 */
function getBaseName(fileName) {
    const parts = fileName.split("/");
    const basename = parts.slice(-1)[0].split(".")[0];
    parts.splice(parts.length - 1);
    return `${parts.join("/")}/${basename}`;
}

/**
 * Generates the documentation for all components supplied to it. This function only needs an array of base names
 * generated from getBaseName() to generate the necessary documentation. It also compiles a handlebars template and
 * writes it to the dist/ directory.
 * @param components
 */
function generateComponentDocumentation(components) {
    components.forEach((component) => {
        let descriptionMarkdown = "";
        let codeSnippet = "";
        let exampleFileName = "";
        let exampleClassName = "";
        let exampleUsage = "";
        let componentClassName = "";

        const files = glob.sync(`${component}.*`);
        files.forEach((file) => {
            if (file.endsWith(".md")) {
                const descriptionFileContent = fs.readFileSync(file, "utf8");
                descriptionMarkdown = preformatContent(descriptionFileContent, "description");
            } else if (file.endsWith(".spec.js")) {
                // TODO: Figure out testing

            } else if (file.endsWith(".snippet.js")) {
                const snippet = fs.readFileSync(file, "utf8");
                codeSnippet = preformatContent(snippet, "codeSnippet");
            } else if (file.endsWith(".example.js")) {
                const exampleContent = fs.readFileSync(file, "utf8");
                exampleFileName = file.split("/").slice(-1)[0];
                exampleClassName = exampleContent.match(/export default function ([a-zA-z0-9]+)\s?\(/)[1];
                /**
                 * Within an example, you have to specify how it should be inserted into the documentation.
                 * The format is:
                 * /*;;usage
                 * <YourReactComponent props={asUsual()}>
                 *     <Children are="allowed" />
                 * </YourReactComponent
                 * ;;*/

                exampleUsage = exampleContent.match(/\/\*;;usage([\w\W\s.<>="{()}]+);;\*\//)[1];

                fs.writeFileSync(`build/generator/frontend/src/components/${exampleFileName}`, exampleContent, "utf8");
            } else if (file.endsWith(".js")) {
                const componentContent = fs.readFileSync(file, "utf8");
                const componentMatch = componentContent.match(/export default (class)?\s?([a-zA-Z0-9]+)/);
                if (componentMatch)
                    componentClassName = componentMatch[2];
            }
        });


        const componentTemplateSource = fs.readFileSync("build/generator/templates/component.hbs", "utf8");
        const componentTemplate = handlebars.compile(componentTemplateSource);
        const data = {
            description: descriptionMarkdown,
            codeSnippet,
            exampleFileName,
            exampleClassName,
            exampleUsage,
            componentClassName,
        };
        const renderedTemplate = componentTemplate(data);
        fs.writeFileSync(`build/generator/frontend/src/components/${component.split("/").slice(-1)[0]}.jsx`, renderedTemplate, "utf8");
    })
}

/**
 * Handlebars helper 'categorize' which will turn a set of data into categories that can be
 * used by React
 */
handlebars.registerHelper("categorize", (categories, options) => {
    let output = "";
    Object.keys(categories).forEach((category) => {
        const data = {
            name: category,
            visible: categories[category].visible,
            componentList: categories[category].components,
        };

        output += options.fn(data);
    });

    return output;
});

/**
 * Iterate through the component sources
 */
glob("source/_patterns/*/**/*.js", (err, files) => {
    const componentDirectories = [];

    console.log("Preparing...");
    files.forEach((file) => {
        const fileSplit = file.split("/");
        fileSplit.splice(fileSplit.length - 1);
        const dir = fileSplit.join("/");
        if (!componentDirectories.includes(dir)) componentDirectories.push(dir);
    });

    /**
     * Initialize and generate categories from component sources and prepare them for the
     * handlebars template
     */
    console.log("Initializing categories...");
    const categories = {}, indexFiles = [];
    glob.sync("source/_patterns/*/")
        .map((cf) => {
            return cf.split("/").slice(-2)[0]
        })
        .filter((cf) => {
            return cf !== "react-utils" && cf !== "corporate-identity"
        })
        .forEach((cf) => {
            categories[cf] = {visible: true, components: []}
        });

    /**
     * Generate documentation for each component
     */
    console.log("Generating documentation...");
    each(componentDirectories, (directory, callback) => {
        const components = glob.sync(`${directory}/*.js`).map((component) => {
            return component.split("/").slice(-1)[0];
        });

        const componentFiles = [];

        /**
         * Collect all components that reside within the directories that contain them
         */
        components.forEach((component) => {
            glob.sync(`${directory}/${component.split(".js")[0]}.*`)
                .map((f) => {
                    return getBaseName(f)
                })
                .filter((value, index, self) => {
                    return self.indexOf(value) === index
                })
                .forEach((componentFile) => {
                    if (!componentFiles.includes(componentFile)) componentFiles.push(componentFile)
                });
        });

        generateComponentDocumentation(componentFiles);

        /**
         * Fill in all components and assign them their categories so that they will be displayed properly
         * in the frontend navigation
         */
        componentFiles.forEach((cf) => {
            const category = categories[directory.split("/")[2]];
            if (category !== undefined) {
                let className;
                if (fs.existsSync(`${cf}.js`))
                    className = fs.readFileSync(`${cf}.js`, "utf8").match(/export default class (\w+)/);
                if (Array.isArray(className) && className.length > 1) {
                    const fileName = cf.split("/").slice(-1)[0];
                    let className = "";
                    if (fileName.includes("-")) {
                        const splittedFileName = fileName.split("-");
                        className = splittedFileName.map((f) => {
                            return f.charAt(0).toUpperCase() + f.slice(1);
                        }).join("");
                    } else {
                        className = fileName.charAt(0).toUpperCase() + fileName.slice(1);
                    }
                    category.components.push(className);
                    indexFiles.push({name: className, fileName});
                }
            }
        });
        callback();
    });

    Object.keys(categories).forEach((key) => {
        if (categories[key].components.length === 0)
            delete categories[key];
    });

    console.log("Finishing up...");
    const homeTemplateSource = fs.readFileSync("build/generator/templates/home.hbs", "utf8");
    const homeTemplate = handlebars.compile(homeTemplateSource);
    const homeTemplateData = {
        categories,
        categoryNames: Object.keys(categories)
    };
    const renderedHomeTemplate = homeTemplate(homeTemplateData);
    fs.writeFileSync("build/generator/frontend/src/home.jsx", renderedHomeTemplate, "utf8");

    const indexTemplateSource = fs.readFileSync("build/generator/templates/components_index.hbs", "utf8");
    const indexTemplate = handlebars.compile(indexTemplateSource);
    const indexTemplateData = {
        components: indexFiles,
    };
    const renderedIndexTemplate = indexTemplate(indexTemplateData);
    fs.writeFileSync("build/generator/frontend/src/components/index.jsx", renderedIndexTemplate, "utf8");

});

