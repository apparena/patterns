### What problem does this solve?

Implementing a select menu in React is a quite lengthy process if you do it from scratch.
This pattern provides a nice wrapper around the 'react-select' library with a consistent styling that can be implemented in few lines of code.


### When and how to use this pattern?

Whenever you want to create a select menu in React (for example by using the built-in HTML element \<select\>) you should consider using this pattern.
To use it you'll need 4 things:

1. A variable in your state to keep track of the selected option.
2. Selectable options as an array of objects. Each object needs to have a key `label` and a key `value`.
The label is what the user sees in the list of options, the value is the internal value that your application will use.
Example:
```javascript
const options = [
    {label: 'action', value: 'action'},
    {label: 'sci-fi', value: 'sci-fi'},
    {label: 'western', value: 'western'}
]
```

3. An `onChange` function that will be called whenever the user selects a new option.
Example:

```javascript
onChange(obj) {
    this.setState({
        value: obj.value
    });
}
```

4. The main \<Select\> component in your render function.
Example:
```jsx
<Select
    onChange={this.onChange}
    defaultValue={this.state.value}
    options={this.options}
/>
```

### What if…
**…I want to be able to select multiple values:**

In step 4 simply add another prop called "multi" (because it's a boolean you don't need to supply a value).  
You will also have to change your `onChange` function because the argument `obj` will be an array.
Here's what it might look like:

```javascript
onChange(objs) {
    const values = [];
    
    objs.forEach((obj) => {
        values.push(obj.value);
    });
    
    this.setState({
        values: values
    });
}
```




