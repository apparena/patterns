# Documentation generator for the App-Arena React Components  

Please read the [important note](#important-note) at the bottom before creating your own documentation.

### Documenting a component

1. Add a new *docs/* directory to the component if there isn't one already
2. Create a new markdown file (\*.md) with the same name as the component directory if it doesn't exist yet (only one per component)
3. Write any description in markdown format in that file
4. Create a new JS file (\*.example.js) with the same name as the component directory if it doesn't exist yet (only one per component)
5. Create a working react component inside the \*.example.js file

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

In the example JS file you can import any pattern from the npm module *'apparena-patterns-react'*,
webpack will use the source/patterns directory and it is **not** necessary to install
the patterns as a dependency. You can also use subdirectories, e.g. *'apparena-patterns-react/fonts/app-arena-icons.svg'*  
If you use subdirectories like that *apparena-patterns-react* will be treated as the *source/* folder,
this allows you to use other resources outside of the main pattern directory as well.