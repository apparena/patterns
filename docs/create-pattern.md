# Create pattern

We provide a yeoman generator that requires 2 clicks to create a new
pattern.

1. Install the generator: `npm install -g generator-apparena-pattern`
2. `cd` into the App-Arena patterns root directory (it contains a `.yo-rc.json` file)
3. Run the generator: `yo apparena-pattern`
4. Follow the onscreen prompts
5. Overwrite the file *source/patterns/index.js* if prompted (make a backup of your changes!)

Done! Now edit your newly created pattern under *source/patterns/...*

## Documenting a pattern

1. Add a new `docs/` directory to the pattern if there isn't one
   already
2. Create a new markdown file (\*.md) with the same name as the
   pattern directory if it doesn't exist yet (only one per pattern)
3. Write any description in markdown format in that file
4. Create a new JS file (\*.example.js) with the same name as the
   pattern directory if it doesn't exist yet (only one per pattern)
5. Create a working react pattern inside the \*.example.js file

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

This file will then be inserted in the documentation where the user can
optionally inspect the source code as well. The markdown file for the
pattern should cover these two questions at least:
* What problem does this solve?
* When and how to use this pattern?

By answering these two questions in your markdown file a user of the
patterns should be able to tell whether he needs the pattern and how to
use it.
