Col
---

### What problem does this solve?

Bootstrap columns (and by extension the entire bootstrap grid system) are simply amazing
but they're not the most straightforward to use. You'll have to get accustomed to their
naming scheme (which most likely breaks whenever a new major version is released)
and you have to clutter your HTML elements with additional classes.

The \<Col\> pattern is here to help. Its easy to configure and provides an abstraction
from bootstrap itself so you won't have to get used to new naming schemes whenever there's
a major bootstrap update.

### When and how to use this pattern?

If you aren't already familiar with the bootstrap grid system you should get familiar with it
by [reading its documentation](http://getbootstrap.com/docs/4.0/layout/grid/).

If you need to lay a number of components and elements out in a grid then this pattern is most likely for you.

It's very easy to use. First you need to create a \<Row\> which will be the parent of all your \<Col\>s.  
Then, wrap every element that should be in its own column in a \<Col\>.  
Example:  
If you wanted to have 3 inputs in one row you could do it like this:

```jsx
<Row>
    <Col xs="4">
        <Input ... />
    </Col>
    <Col xs="4">
        <Input ... />
    </Col>
    <Col xs="4">
        <Input ... />
    </Col>
</Row>
```

