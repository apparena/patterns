# Frontend source code

The source code for the frontend resides in the *source/frontend/* directory.  
The heart of the frontend lies within *source/frontend/home.jsx*.  
Run `npm run build:frontend:dev` again if you add new documentation.
Changing existing documentation doesn't require a restart for
`npm run build:frontend:watch` or `npm run start`

# Adding static pages

1. Create a new folder in the *source/pages/* directory with a name of your choosing
(The name will not be visible in the frontend but it has to be unique)
2. Create a new JavaScript file (*.js or *.jsx) file in the new folder
3. Add the necessary content into this file (See "[What's necessary to make a working static page](#whats-necessary-to-make-a-working-static-page)")
4. Optionally: Add any number of additional JavaScript files
5. Add a `index.js` file into your folder (See "[Putting your pages together in the index.js file](#putting-your-pages-together-in-the-indexjs-file)")
6. Insert your new page into the *pages/index.js* file if not present

Follow these steps to add a new page into the *pages/index.js* file:

1. At the top insert a new import statement like so:
```javascript
import * as <folder name in pascal case> from './<page folder>';
```

1. Add a new block to the `pagesToInclude` array:
```javascript
{
    components: <folder name in pascal case>,
    title: '<title to be displayed in the frontend>',
}
```

### Putting your pages together in the index.js file

Your page's directory needs a `index.js` file which will put your page together.
It needs to export all pages that you've created.  
Here's an example:

```javascript
import * as MyPage from './my-page';
import * as Page1 from './page1';
import * as Page2 from './page2';

export {
    MyPage,
    Page1,
    Page2
}
```

Note: If you want to re-order your pages in the sidebar you have to give them different names in this file so that they'll
be sorted into your desired order (sorting is always alphabetical).  
If you wanted Page2 to be the second sidebar item, for example, you can do it like this:

```javascript
import * as P00MyPage from './my-page';
import * as P02Page1 from './page1';
import * as P01Page2 from './page2';

export {
    P00MyPage,
    P02Page1,
    P01Page2
}
```

**Important:** The alphabetically first page will be the page that's shown if you click on the top
navigation item while all others will be sidebar items.

### What's necessary to make a working static page

The following applies both to the main static page file described previously in step 3
and the sidebar items described in step 4.

Every file has to consist of two things:
1. A title
2. A react component

The title has to be inserted like this into every file at the top level:

```javascript
const title = '';
```

For the react component you have more freedom; both functional (stateless) and stateful
components work just fine. The only requirement for the react component is that it
has to be called `render`.
You can either create your component like this:

```javascript
// Functional component
export default function render() { ...
```

or like this:

```javascript
// Stateful component
export default class render [extends ...] { ...
```

Finally both the title and the render function/class have to be the default export.
Insert this code snippet at the bottom of your pages:

```javascript
export default {
    title,
    render
}
```

and you're done!
