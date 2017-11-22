Row
---

The `Row` component needs to be wrapped around one or more \<Col\>s.
Please see the [documentation for `Cols`](/#/Col) if you need to know how to use them.

Rows are only wrappers around cols and can optionally be used to provide
styling for a group of cols.  
**However, rows around cols are NOT optional**

Correct:

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

Wrong:

```jsx
<div>
    <Col xs="4">
        <Input ... />
    </Col>
    <Col xs="4">
        <Input ... />
    </Col>
    <Col xs="4">
        <Input ... />
    </Col>
</div>
```