import camelcase from 'camelcase';
// Add a new folder here to add a new tp navigation item
import * as Brand from './brand';
import * as Communication from './communication';
import * as Product from './product';
import * as Platform from './platform';

const pagesToInclude = [
    {
        components: Brand,
        title: 'Brand',
    },
    {
        components: Communication,
        title: 'Communication',
    },
    {
        components: Product,
        title: 'Product',
    },
    {
        components: Platform,
        title: 'Platform',
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
