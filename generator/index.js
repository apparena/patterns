import glob from "glob";
import each from "async/each";
import fs from "fs-extra";
import handlebars from "handlebars";

if (!fs.existsSync("generator/dist")) {
    fs.mkdirSync("generator/dist");
} else {
    fs.emptyDirSync("generator/dist");
    fs.rmdirSync("generator/dist");
    fs.mkdirSync("generator/dist");
    fs.mkdirSync("generator/dist/components");
}

function preformatContent(fileContent, varName) {
    let formatted = [];
    fileContent.split("\n").forEach((line) => {
        formatted.push(`'${line}\\n'`);
    });
    return `const ${varName} = [${formatted}].join("");`;
}

function getBaseName(fileName) {
    const parts = fileName.split("/");
    const basename = parts.slice(-1)[0].split(".")[0];
    parts.splice(parts.length - 1);
    return parts.join("/") + "/" + basename;
}

function generateComponentDocumentation(components) {
    components.forEach((component) => {
        let descriptionMarkdown = "";
        let codeSnippet = "";
        let exampleFileName = "";
        let exampleClassName = "";
        let exampleUsage = "";

        const files = glob.sync(`${component}.*`);
        files.forEach((file) => {
            if (file.endsWith(".md")) {
                let descriptionFileContent = fs.readFileSync(file, "utf8");
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

                fs.writeFileSync(`generator/dist/components/${exampleFileName}`, exampleContent, "utf8");
            } else if (file.endsWith(".js")) {

            }
        });

        const componentTemplateSource = fs.readFileSync("generator/templates/component.hbs", "utf8");
        const componentTemplate = handlebars.compile(componentTemplateSource);
        const data = {
            description: descriptionMarkdown,
            codeSnippet,
            exampleFileName,
            exampleClassName,
            exampleUsage
        };
        const renderedTemplate = componentTemplate(data);
        fs.writeFileSync(`generator/dist/components/${component.split("/").slice(-1)[0]}.jsx`, renderedTemplate, "utf8");
    })
}

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

glob("source/_patterns/*/**/*.js", (err, files) => {
    let componentDirectories = [];

    files.forEach((file) => {
        const fileSplit = file.split("/");
        fileSplit.splice(fileSplit.length - 1);
        const dir = fileSplit.join("/");
        if (!componentDirectories.includes(dir)) componentDirectories.push(dir);
    });

    const categories = {};
    glob.sync("source/_patterns/*/")
        .map((cf) => {return cf.split("/").slice(-2)[0]})
        .filter((cf) => {return cf !== "react-utils" && cf !== "corporate-identity"})
        .forEach((cf) => {categories[cf] = {visible: true, components: []}});

    each(componentDirectories, (directory, callback) => {
        const components = glob.sync(`${directory}/*.js`).map((component) => {
            return component.split("/").slice(-1)[0];
        });

        const componentFiles = [];

        components.forEach((component) => {
            glob.sync(`${directory}/${component.split(".js")[0]}.*`)
                .map((f) => {return getBaseName(f)})
                .filter((value, index, self) => {return self.indexOf(value) === index})
                .forEach((componentFile) => {if (!componentFiles.includes(componentFile)) componentFiles.push(componentFile)});
        });

        generateComponentDocumentation(componentFiles);
        componentFiles.forEach((cf) => {
            const category = categories[directory.split("/")[2]];
            if (category !== undefined) {
                let className;
                if (fs.existsSync(`${cf}.js`))
                    className = fs.readFileSync(`${cf}.js`, "utf8").match(/export default class (\w+)/);
                if (Array.isArray(className) && className.length > 1)
                    category.components.push(className[1]);
            }
        });
        callback();
    });

    Object.keys(categories).forEach((key) => {
        if (categories[key].components.length === 0)
            delete categories[key];
    });

    const homeTemplateSource = fs.readFileSync("generator/templates/home.hbs", "utf8");
    const homeTemplate = handlebars.compile(homeTemplateSource);
    const data = {
        categories,
        categoryNames: Object.keys(categories)
    };
    const renderedHomeTemplate = homeTemplate(data);
    fs.writeFileSync("generator/dist/home.jsx", renderedHomeTemplate, "utf8");

});

