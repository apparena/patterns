# Frontend source code

The source code for the frontend resides in the *source/frontend/* directory.  
The heart of the frontend lies within *source/frontend/home.jsx*.  
Run `npm run build:frontend:dev` again if you add new documentation.
Changing existing documentation doesn't require a restart for
`npm run build:frontend:watch` or `npm run start`

# Adding static pages

1. Create a new folder in the *source/pages/* directory with a name of your choosing
(The name will not be visible in the frontend but it has to be unique)
2. Create a new JavaScript file (*.js or *.jsx) file in the new folder that has the same name as that folder.
(See the existing example. If you prefix any folder with a dot it will be ignored in the frontend)
3. Add the necessary content into this main file
4. Optionally: Add any number of additional JavaScript files that will be accessible via the sidebar.
5. Insert your new page into the *pages/index.js* file if not present

Follow these steps to add a new page into the index.js file:

1. At the top insert a new import statement like so:
```javascript
import * as <name of your choosing> from './<page>/<js file>';
```

1. Add a new block to the exports array:
```javascript
{
    route: '<page>/<js file>',
    component: <name of your choosing,
    position: '<position>',
    page: '<page>'
}
```

*Position* can be one of these:
* `top` The page is visible in the top navbar
* `sidebar` The page is a sidebar item on <page>


### What's necessary to make a working static page

The following applies both to the main static page file described previously in step 3
and the sidebar items described in step 4.

Every file has to consist of two things:
1. A title
2. A react component

The title has to be inserted like this into every file:

```javascript
export const title = '';
```

For the react component you have more freedom; both functional (stateless) and stateful
components work just fine. The only requirement for the react component is that it
has to be the default export.
You can either create your component like this:

```javascript
// Functional component
export default function ...
```

or like this:

```javascript
// Stateful component
export default class ... [extends ...]
```

Everything else is up to you. It is recommended to read the example files in the *.example* static
page folder to get an idea of how to make your static page look good. If you remove the dot prefix
and run the documentation generator you can see it live in action.