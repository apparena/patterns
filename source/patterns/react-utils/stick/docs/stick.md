### Helping utilitiy to Stick an Component to an other

Used by Tooltip or PopOver

Example Use in Tooltip:
```
<Portal>
    <Stick
        element={this._handler}
        positioning={this.props.positioning}
        fixed={this.props.fixed}
        zIndex={this.props.zIndex}
        transition={this.props.transition}
        offset={10}
    >
        <div className={cx(styles.tooltip, styles[this.props.positioning.split(' ')[0]])}>
            {label}
        </div>
    </Stick>
</Portal>
```