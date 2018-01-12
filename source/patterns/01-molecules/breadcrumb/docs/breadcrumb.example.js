import React from 'react';
import {BreadCrumb} from 'apparena-patterns-react';

export default function BreadCrumbExample() {
    return (
        <BreadCrumb
            crumbNames={[
                'Home',
                'Calendar',
                'April'
            ]}
            crumbLocations={[
                'example.com/',
                'example.com/calendar',
                'example.com/calendar/april'
            ]}
        />
    );
}

/*;;usage
<BreadcrumbExample />
;;*/