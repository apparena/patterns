### When and how to use this pattern?

This pattern gives you the ability to add a description to certain parts of your page.
Thus you should only use this pattern if certain elements could require further explanation.
It's fairly straightforward to use: simply wrap a `<Tooltip>` around the element for which
the tooltip exists. The `label` prop should contain the text in the tooltip and
the `positioning` should contain the position for the tooltip.  
Available positions are:
* top
* top left
* top right
* bottom
* bottom left
* bottom right
* left
* left top
* left bottom
* right
* right top
* right bottom
* overlay