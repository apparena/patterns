import glob from "glob";
import Home from "./frontend/src/home";
import React from "react";
import {mount} from "enzyme";

function preformatContent(fileContent, varName) {
    const formatted = [];
    fileContent.split("\n").forEach((line) => {
        formatted.push(`'${line.replace(/[']/g, "\\'")}\\n'`);
    });
    return `const ${varName} = [${formatted}].join("");`;
}

function getBaseName(fileName) {
    const parts = fileName.split("/");
    const basename = parts.slice(-1)[0].split(".")[0];
    parts.splice(parts.length - 1);
    return `${parts.join("/")}/${basename}`;
}

describe("Important functions", () => {
    test('preformatContent works as expected', () => {
        expect(preformatContent("Hello world", "myvar")).toBe("const myvar = ['Hello world\\n'].join(\"\");");
        expect(preformatContent("Hello world", "myvar")).not.toBe("const myvar = 'Hello world';");
        expect(preformatContent("A multiline\nDokumentation", "myvar")).toBe("const myvar = ['A multiline\\n','Dokumentation\\n'].join(\"\");");
    });

    test('getBaseName works as expected', () => {
        expect(getBaseName("path/to/file.txt")).toBe("path/to/file");
        expect(getBaseName("path/to/file.txt")).not.toBe("path/to/file.txt");
        expect(getBaseName("another/path/to/a/big_file.jpeg")).toBe("another/path/to/a/big_file");
    });

    test('category initialization for handlebars template works', () => {
        const categories = {};
        glob.sync("source/_patterns/*/")
            .map((cf) => {return cf.split("/").slice(-2)[0]})
            .filter((cf) => {return cf !== "react-utils" && cf !== "corporate-identity"})
            .forEach((cf) => {categories[cf] = {visible: true, components: []}});

        /**
         * Look at source/_patterns to check which folders should be here
         */
        const comparator = {
            '00-atoms': { visible: true, components: [] },
            '01-molecules': { visible: true, components: [] },
            '02-organisms': { visible: true, components: [] },
            '03-templates': { visible: true, components: [] },
            '04-pages': { visible: true, components: [] }
        };

        expect(categories).toEqual(comparator);
    });
});

describe("Frontend rendering", () => {
    test('home is rendered correctly', () => {
        const home = mount(
            <Home />
        );

        expect(home.find("#searchInput")).toHaveLength(1);
        expect(home.find("#searchInput").props().value).toBe("");
        expect(home.find("ul").length).toBeGreaterThanOrEqual(2);
        expect(home.find("div > h3")).toHaveLength(1);
        expect(home.find("div > h3").props().children).toBe("Willkommen zur Dokumentationsplattform");
        expect(home.find("h3 + p").props().children).toBe("Klicken Sie auf eine Komponente um zu ihrer Dokumentation zu gelangen!");
    });

    test('search finds correct results when there are some', () => {
        const home = mount(
            <Home />
        );

        expect(home.find("#searchInput")).toHaveLength(1);
        expect(home.find("#searchInput").props().value).toBe("");
        home.find("#searchInput").simulate("change", {target: {value: "Button"}});
        expect(home.find("#searchInput").props().value).toBe("Button");
        expect(home.find("li").length).toBeGreaterThanOrEqual(1);
        home.find("li").forEach((li) => {
            expect(li.props().children.props.children).toMatch(/[bB]utton/);
        })
    });

    test('search finds no results when there are none', () => {
        const home = mount(
            <Home />
        );

        expect(home.find("#searchInput")).toHaveLength(1);
        expect(home.find("#searchInput").props().value).toBe("");
        home.find("#searchInput").simulate("change", {target: {value: "asdfghjklqwerty"}});
        expect(home.find("#searchInput").props().value).toBe("asdfghjklqwerty");
        expect(home.find("li")).toHaveLength(0);
    });

    test('components are displayed properly', () => {
        const home = mount(
            <Home location={{pathname: "/Button"}} />
        );

        expect(home.find("ExampleContainer")).toHaveLength(1);
        expect(home.find("Snippet")).toHaveLength(1);
        expect(home.find("Description")).toHaveLength(1);
        expect(home.find("div > h3")).not.toHaveLength(1);
        expect(home.find("h3 + p")).toHaveLength(0);
    });
});
