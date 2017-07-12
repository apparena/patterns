# Documentation generator for the App-Arena React Components  

This program generates the documentation for the App-Arena React Components
automatically. Simply run `npm run generate-docs` in the parent directory
to execute it. The results will be stored in the frontend/ directory
which contains everything related to the frontend of the documentation.

### Creating a new component  

The docucmentation generator requires several files, which have to be created manually,
in order to generate proper documentation. 
Here's an overview of what the directory structure of a component named *"MyComponent"* 
might look like:  

MyComponent/  
|- MyComponent.js  
|- MyComponent.md  
|- MyComponent.snippet.js  
|- MyComponent.example.js  


Of course you still need your main component's .js file.
Additionally a Markdown file of the same name with the extension *.md*
has to be created which contains your entire documentation.  
A file with the extension *.snippet.js* is also required which will contain some code
that will simply be displayed in the frontend. It is meant to show anyone
how to properly use the component in their own code. Because it is **not** interpreted
it needn't be syntactically correct but keep in mind that spelling errors
might lead to users not being able to implement the component into their own code easily.  
Finally a file with the extension *.example.js* is required. This file needs to contain 2 things:  

1. A piece of working code that will properly display the component that you've created  
**IMPORTANT:** Import your component like so: `import {<NAME>} from "apparena-patterns-react";`  

2. A piece of working code that will be used to display the code that you've written in step 1 
surrounded with a beginning `/*;;usage` and an ending `;;*/`  

**A working example (a button):**  

The *.example.js* file for the button looks like this:  
```javascript
import React from "react";
import {Button} from "apparena-patterns-react";

export default function ButtonExample({text}) {
    return (
        <Button type="primary">
            {text}
        </Button>
    );
}

/*;;usage
<ButtonExample text="Click me!" />
;;*/
```  

This file will then be imported in the documentation (thus the usage part has to be a comment) 
and the usage part will be inserted as a piece of code.  
Here's what it looks like in a generated component:  

```javascript
import ButtonExample from "./button.example.js";
...

<ExampleContainer>
    <ButtonExample text="Click me!" />
</ExampleContainer>
```  

You *can* create a *.spec.js* file for testing, but these tests are not used in the documentation.  