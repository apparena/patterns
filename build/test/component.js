import React, {PropTypes} from "react";
import {render} from "react-dom";
import {ReactComponent, PriceTable, Spinner} from "../../source/_patterns/index";
import i18n from "i18n-js";
import translations from "./messages";
import axios from "axios";

//Setting up i18n
i18n.defaultLocale = "de";
i18n.locale = "de";
i18n.fallbacks = true;
i18n.translations = translations;


export default class PriceTableContainer extends ReactComponent {
    static propTypes = {
        appId: PropTypes.string,
        templateId: PropTypes.string.isRequired,
        orderData: PropTypes.object
    };

    getInitState() {
        this.onBuyBind = ::this.onBuy;
        return {
            selected: "",
            notifications: [],
            plans: {},
            orderData: this.props.orderData
        };
    }

    componentDidMount() {
        this.loadPlans();
    }


    loadPlans() {
        axios.get('/source/_patterns/02-organisms/price-table/price-table.json')
            .then((res) => {
                this.setState({
                    plans: res.data,
                });
            })
    }

    onBuy(orderData) {
        console.log(orderData);
    }

    render() {
        if (!Object.keys(this.state.plans).length) {
            return (
                <Spinner size="lg" type="primary"/>
            )
        }
        return (
            <PriceTable
                plans={this.state.plans}
                templateId={this.props.templateId}
                onClick={"dsa"}
            />
        )
    }
}


render(<PriceTableContainer templateId="1197"/>, document.getElementById("component"));
