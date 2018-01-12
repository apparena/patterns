# Documentation generator for the App-Arena React Components  

This program generates the documentation for the App-Arena React Components
automatically. Simply run `npm run build:docs` to execute it.
The results will be stored in the public/ directory
which contains everything related to the frontend of the documentation.  
Alternatively run `npm run build:frontend:dev` or `npm run build:frontend:watch` if you're working locally
and want to see your changes in the frontend.  
Please read the [important note](#important-note) at the bottom before creating your own documentation.

### Documenting a component

The documentation generator requires several files, which have to be created manually,
in order to generate proper documentation. The documentation files have to reside
in the `docs` directory of your component.
Here's an overview of what the directory structure of a component named *"MyComponent"* 
might look like:  

MyComponent/  
├ MyComponent.js  
├ MyComponent.scss  
├ docs/  
│ ├ MyComponent.md  
│ ├ MyComponent.example.js


Of course you still need your main component's *.js* file.
Additionally a Markdown file of the same name with the extension *.md*
has to be created which contains your entire documentation.  
A file with the extension *.example.js* is also required.
This file needs to contain a working react component that uses the pattern.
The component will be included in the frontend as-is and the source code
of the entire component can be viewed there as well.

**A working example (a button):**  

The *.example.js* file for the button looks like this:  
```javascript
import React from 'react';
import {Button} from 'apparena-patterns-react';

export default function ButtonExample() {
    return (
        <div>
            <Button type="primary">
                Primary
            </Button>
            <Button type="secondary">
                Secondary
            </Button>
            <Button type="link">
                Link
            </Button>
        </div>
    );
}
```  

This file will then be inserted in the documentation where the user can optionally
inspect the source code as well.
The markdown file for the component should cover these two questions at least:
* What problem does this solve?
* When and how to use this pattern?

By answering these two questions in your markdown file a user of the patterns
should be able to tell whether he needs the pattern and how to use it.

# Important note

You can import any pattern from the npm module *'apparena-patterns-react'*,
webpack will use the source/patterns directory and it is **not** necessary to install
the patterns as a dependency. You can also use subdirectories, e.g. *'apparena-patterns-react/fonts/app-arena-icons.svg'*  
If you use subdirectories like that *apparena-patterns-react* will be treated as the *source/* folder,
this allows you to use other resources outside of the main pattern directory as well.