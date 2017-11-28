### When and how to use this pattern?

You should use this pattern if you want a more fancy way of displaying your checkboxes.

When clicked the checkbox will fire an 'onChange' event and pass the event data into it.
Use `event.target.checked` in your event listeners to determine whether the checkbox is checked or not.
You can see this clearly in the code example.  
The value is a boolean and should be passed to the checkbox via its 'checked' prompt
(for example by storing the variable in your component's state).