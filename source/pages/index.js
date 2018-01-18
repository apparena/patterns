import * as corporateCommunication from './corporate-communication/corporate-communication';
import * as corporateIdentity from './corporate-identity/corporate-identity';
import * as software from './software/software';
import * as softwareApps from './software/software-apps';
import * as softwarePlatforms from './software/software-platforms';
import * as softwareBigData from './software/software-big-data';
import * as softwareWidgets from './software/software-widgets';

export default [
    {
        route: 'corporate-communication/corporate-communication',
        component: corporateCommunication,
        position: 'top',
        page: 'corporate-communication'
    },
    {
        route: 'corporate-identity/corporate-identity',
        component: corporateIdentity,
        position: 'top',
        page: 'corporate-identity'
    },
    {
        route: 'software/software',
        component: software,
        position: 'top',
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
    {
        route: 'software/software-widgets',
        component: softwareWidgets,
        position: 'sidebar',
        page: 'software'
    },
];