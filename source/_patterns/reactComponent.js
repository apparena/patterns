import React from "react";
import i18n from "i18n-js";

export default class BaseComponent extends React.Component {
    constructor(props, children) {
        super(props, children);
        this.state = this.getInitState ? this.getInitState() : {};
    }

    t(id, data = false) {
        if (data) {
            return i18n.t(id, data);
        }
        return i18n.t(id);
    }
}