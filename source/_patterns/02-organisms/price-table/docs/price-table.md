### What problem does this solve?

This component is a easy-to-use UI to purchase products from the App-Arena
store.

### When and how to use this pattern?

If you want to give users the ability to purchase products then this pattern
is for you. It is relatively straightforward to use. It's recommended to look at the
code to see how to implement the pattern for yourself.  
Please note that the `onClick` function either takes a string or a function.

* If it's a function then it will simply be called and all data is accessible
from the first argument
* If it's a string however then the user is redirected to the URL provided in the prop.
The purchase data and product ID are accessible as query parameters.

Please note that you will have to provide translations for this component.
English translation strings are already provided in the example.
