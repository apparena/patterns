import camelcase from 'camelcase';
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
    const componentKeys = Object.keys(page.components).sort();
    const componentName = componentKeys[0];

    pageTree.push({
        route: `${camelcase(page.title)}/${componentName.replace(/^\d+/, '')}`,
        component: page.components[componentName].default,
        position: 'top',
        page: page.title,
        title: page.title
    });

    componentKeys.forEach((component) => {
        pageTree.push({
            route: `${camelcase(page.title)}/${component.replace(/^\d+/, '')}`,
            component: page.components[component].default,
            position: 'sidebar',
            page: page.title
        });
    });
});

export default pageTree;
