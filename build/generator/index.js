import glob from "glob";
import each from "async/each";
import fs from "fs-extra";
import handlebars from "handlebars";

console.log("Cleaning directories...");
fs.removeSync("build/generator/frontend/src/components");

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
 * @param directory
 */
function generateComponentDocumentation(directory) {
    let descriptionMarkdown = "";
    let codeSnippet = "";
    let exampleFileName = "";
    let exampleClassName = "";
    let exampleUsage = "";
    let componentClassName = "";
    let propsUsage = "";
    let propsFileName = "";
    let propsClassName = "";

    const files = glob.sync(`${directory}/**/?(docs)/**`);
    files.forEach((file) => {
        console.log(file);
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
            exampleUsage = exampleClassName;

            fs.outputFileSync(`build/generator/frontend/src/components/${directory}/docs/${exampleFileName}`, exampleContent, "utf8");
        } else if (file.endsWith(".input.js")) {
            const propsContent = fs.readFileSync(file, "utf8");
            propsFileName = file.split("/").slice(-1)[0];
            propsClassName = propsContent.match(/export default class ([a-zA-z0-9]+)\s?extend/)[1];
            propsUsage = propsClassName;

            fs.outputFileSync(`build/generator/frontend/src/components/${directory}/docs/${propsFileName}`, propsContent, "utf8");
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
        propsFileName,
        propsClassName,
        propsUsage,
        componentClassName,
    };
    const renderedTemplate = componentTemplate(data);
    fs.outputFileSync(`build/generator/frontend/src/components/${directory}/index.jsx`, renderedTemplate, "utf8");
}

function createComponentsList(categories) {
    const list = Object.keys(categories).map((category) => {
        return {
            name: category,
            visible: categories[category].visible,
            componentList: categories[category].components,
        };
    });
    const liststring = JSON.stringify(list);

    fs.writeFile("build/generator/frontend/src/components/list.json", liststring);
}


/**
 * Iterate through the component sources
 */
glob("source/_patterns/*/**/!(__tests|docs)/*.js", (err, files) => {
    const componentDirectories = [];

    console.log("Preparing...");
    files.forEach((file) => {
        const fileSplit = file.split("/");
        fileSplit.splice(fileSplit.length - 1);
        const dir = fileSplit.join("/");
        if (!componentDirectories.includes(dir)) {
            componentDirectories.push(dir);
        }
    });

    console.log(componentDirectories);
    /**
     * Initialize and generate categories from component sources and prepare them for the
     * handlebars template
     */
    console.log("Initializing categories...");
    const categories = {}, indexFiles = [];
    glob.sync("source/_patterns/!(react-utils|corporate-identity)/")
        .map((cf) => {
            return cf.split("/").slice(-2)[0]
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
                    if (!componentFiles.includes(componentFile)) {
                        componentFiles.push(componentFile)
                    }
                });
        });

        generateComponentDocumentation(directory);

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
                    indexFiles.push({name: className, fileName, directory});
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

    createComponentsList(categories);

    const indexTemplateSource = fs.readFileSync("build/generator/templates/components_index.hbs", "utf8");
    const indexTemplate = handlebars.compile(indexTemplateSource);
    const indexTemplateData = {
        components: indexFiles,
    };
    const renderedIndexTemplate = indexTemplate(indexTemplateData);
    fs.outputFileSync("build/generator/frontend/src/components/index.jsx", renderedIndexTemplate, "utf8");

});

