import React from "react";
import {render} from "react-dom";
import {ReactComponent, PriceTable} from "../../source/_patterns/index";
import i18n from "i18n-js";
import translations from "./messages";

//Setting up i18n
i18n.defaultLocale = "de";
i18n.locale = "de";
i18n.fallbacks = true;
i18n.translations = translations;


class Test extends ReactComponent {
    getInitState() {
        return {
            value: []
        }
    }

    handleOnChange(value) {
        this.setState({value});
    }

    render() {
        return (
            <div>
                <PriceTable dataRoute={"/source/_patterns/02-organisms/price-table/price-table.json"}/>
            </div>
        );
    }
}


render(<Test />, document.getElementById("component"));
