import React from "react";
import i18n from "i18n-js";

var uniqueKey;

export default class BaseComponent extends React.Component {
    constructor(props, children) {
        super(props, children);
        this.state = this.getInitState ? this.getInitState() : {};
        uniqueKey = 0;
    }

    getUniqueKey() {
        return uniqueKey++;
    }

    getChildrenArray(children){
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, child.props);
        });
    }

    t(id, data = false) {
        if (data) {
            return i18n.t(id, data);
        }
        return i18n.t(id);
    }

}