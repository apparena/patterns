// Add a new folder here to add a new tp navigation item
import * as Personality from './brand/01-personality';
import * as Colors from './brand/colors';
import * as Documents from './brand/documents';
import * as Icons from './brand/icons';
import * as Logos from './brand/logos';
import * as Presentations from './brand/presentations';
import * as Storytelling from './brand/storytelling';
import * as Typography from './brand/typography';
import * as WritingStyle from './brand/writing-style';
import * as Apps from './product/01-apps';
import * as Widgets from './product/02-widgets';
import * as BigData from './product/big-data';
import * as Platform from './product/platform';
const foldersToInclude = [{
    folder: 'brand',
    title: 'Brand',
    pages: [
        '01-personality',
        'colors',
        'documents',
        'icons',
        'logos',
        'presentations',
        'storytelling',
        'typography',
        'writing-style',
    ]
}, {
    folder: 'product',
    title: 'Product',
    pages: [
        '01-apps',
        '02-widgets',
        'big-data',
        'platform',
    ]
}];

// Build the top navigation
const pageTree = [];
for (const folderItem of foldersToInclude) {

    // Trim numbers from the beginning of the filename
    const leadPage = folderItem.pages[0].replace(/^\d+\-\s*/, '');
    const componentName = leadPage.charAt(0).toUpperCase() + leadPage.slice(1).toLowerCase();
    pageTree.push({
        route: `${folderItem.folder}/${leadPage}`,
        component: componentName,
        position: 'top',
        page: folderItem.folder
    });
    // Add sidebar navigation pages
    for (const page of pages) {
        const scope = page.pages[0].replace(/^\d+\-\s*/, '');
        const componentName = page.charAt(0).toUpperCase() + page.slice(1).toLowerCase();
        pageTree.push({
            route: `${folderItem.folder}/${scope}`,
            component: componentName,
            position: 'top',
            page: folderItem.folder
        });
    }
}

// Build


export default pageTree;

/*
export default [
    // Corporate communication
    {
        route: 'brand/brand',
        component: corporateCommunication,
        position: 'top',
        page: 'brand'
    },
    // Corporate identity
    {
        route: 'brand/brand',
        component: corporateIdentity,
        position: 'top',
        page: 'brand'
    },
    {
        route: 'brand/personality',
        component: CorporateIdentityPersonality,
        position: 'sidebar',
        page: 'brand-personality'
    },
    // Software
    {
        route: 'software/software',
        component: software,
        position: 'top',
        page: 'software'
    },
    {
        route: 'software/software-widgets',
        component: softwareWidgets,
        position: 'sidebar',
        page: 'software'
    },
    {
        route: 'software/software-apps',
        component: softwareApps,
        position: 'sidebar',
        page: 'software'
    },
    {
        route: 'software/software-platforms',
        component: softwarePlatforms,
        position: 'sidebar',
        page: 'software'
    },
    {
        route: 'software/software-big-data',
        component: softwareBigData,
        position: 'sidebar',
        page: 'software'
    },
];*/
