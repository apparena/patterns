# Before you start

During development make sure to change the paths in the *public/index.html* file to point
to the development versions of those files. To do that simply rename 'main.min.css' to 'main.css',
'main.min.js' to 'main.js' and 'shared.min.js' to 'shared.js'. Make sure you do **not** commit these
changes since the production version has to point to the production files (i.e. those with a '.min.' in their name).

# Development using the built-in server

Use `npm start` to start the server with hot module replacement enabled.
Visit localhost:3001 in your browser to access the frontend.

### Caveats

When using the development server you can only see your changes if you're working in the *public/* directory.
If you make changes to a component you have to copy the final code to the correct file in the *source/patterns/* directory.

# Development using your own server

The preferred way of developing is to serve the *index.html* file using your own web server and
running `npm run build:frontend:dev` or `npm run build:frontend:watch` to see your changes.  
If you change the documentation of a pattern you have to restart the build/watcher.
Updating the documentation in another terminal with the watcher still running seems to cause
an error with webpack.

The *src/main.jsx* file serves as the entry point for the frontend while the file
*src/home.jsx* contains the actual frontend code.

# Adding static pages

The frontend mainly acts as a documentation for the existing patterns but it
can also serve static pages that are defined in the *source/pages/* directory.
Every static page consists of a folder containing any number of JavaScript files.
Creating a new static page is really easy, just follow these steps:

1. Create a new folder in the *source/pages/* directory with a name of your choosing
(The name will not be visible in the frontend but it has to be unique)
2. Create a new JavaScript file (*.js or *.jsx) file in the new folder that has the same name as that folder.
(See the existing example. If you prefix any folder with a dot it will be ignored in the frontend)
3. Add the necessary content into this main file
4. Optionally: Add any number of additional JavaScript files that will be accessible via the sidebar.

Re-run the documentation generator to see the changes. You can also run the watcher and
directly change the page in the *public/src/staticPages/* directory, just don't forget to
make these changes permanent by copying them back into the source folder, otherwise they'll
be lost when you generate the documentation again!

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
export default class ...
```

Everything else is up to you. It is recommended to read the example files in the *.example* static
page folder to get an idea of how to make your static page look good. If you remove the dot prefix
and run the documentation generator you can see it live in action.