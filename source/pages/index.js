// Add a new folder here to add a new tp navigation item
import * as Brand from './brand';
import * as Product from './product';

const pagesToInclude = [
    {
        components: Brand,
        title: 'Brand',
    },
    {
        components: Product,
        title: 'Product',
    }
];

// Build the top navigation
const pageTree = [];

pagesToInclude.forEach((page) => {
    const pageName = page.title.replace(/^\d+\-\s*!/, '');
    const componentKeys = Object.keys(page.components).sort();
    const componentName = componentKeys[0];
    page.components[componentName].title = page.title;

    pageTree.push({
        route: `${page.title.toLowerCase()}/${componentName}`,
        component: page.components[componentName],
        position: 'top',
        page: pageName
    });

    delete page.components[componentName];
    delete componentKeys[0];

    componentKeys.forEach((component) => {
        pageTree.push({
            route: `${page.title.toLowerCase()}/${component}`,
            component: page.components[component],
            position: 'sidebar',
            page: pageName
        });
    });
});

export default pageTree;
