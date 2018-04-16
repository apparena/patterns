# Adding static pages

1. Create a new folder in the *source/pages/* directory with a name of
   your choosing (The name will not be visible in the frontend but it
   has to be unique)
2. Create a new JavaScript file (*.js or *.jsx) file in the new folder
3. Add the necessary content into this file
```javascript
import React from 'react';
import {ReactComponent} from 'apparena-patterns-react';

const title = 'Your components title';

class render extends ReactComponent {

    render() {
        return (
            <div>
                Your component...
            </div>
        );
    }
}

export default {
    title,
    render
};
```

4. Optionally: Add any number of additional JavaScript files
5. Add a `index.js` file into your folder (copy one of the other folders
   and adapt it to your use case)
6. Insert your new page into the *pages/index.js* file if not present

**Important:** The alphabetically first page will be the page that's
shown if you click on the top navigation item while all others will be
sidebar items.

## Building your static pages

The source code for the frontend resides in the `source/frontend/`
directory. The heart of the frontend lies within
*source/frontend/home.jsx*.

Run `npm run build:frontend` again if you add new documentation.
Changing existing documentation doesn't require a restart for `npm run
build:frontend:watch` or `npm run start`

