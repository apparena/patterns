import React from 'react';
import { Breadcrumb } from 'apparena-patterns-react';

export default function BreadCrumbExample() {
  return (
    <Breadcrumb
      crumbNames={[
        'Home',
        'Calendar',
        'April',
      ]}
      crumbLocations={[
        'example.com/',
        'example.com/calendar',
        'example.com/calendar/april',
      ]}
    />
  );
}

/*;;usage
<BreadcrumbExample />
;;*/
