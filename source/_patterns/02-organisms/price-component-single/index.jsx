import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import styles from "./index.scss";
import Col from "../../00-atoms/grid/col";
import Row from "../../00-atoms/grid/row";
import Button from "../../00-atoms/button/button";
import Slider from "../../00-atoms/slider/slider";

export default class PriceComponentSingle extends ReactComponent {
    static propTypes = {
        templateId: PropTypes.string.isRequired,
        onClick: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]).isRequired
    };

    getInitState() {
        this.onPurchase = ::this.onPurchase;
        const {title, price} = this.props;
        this.purchaseData = {
            title,
            price,
            flatrate: false,
            articles: []
        };
        return {
            hours: 1
        };
    }

    /**
     * Prepare & execute purchase
     */
    onPurchase() {
        this.props.onClick(this.purchaseData)
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="4" xsOffset={4}>
                        <div className={styles.priceSelectorContainer}>
                            <div className={styles.price}>
                                <sup>€</sup>{this.state.hours * this.props.price}<sup>*</sup>
                            </div>
                            <p className={styles.priceServicePrompt}>
                                {this.t("priceSingle.hoursPrompt")}
                            </p>
                            <p className={styles.serviceHours}>
                                <span className={styles.serviceHourNumber}>
                                    {this.state.hours}
                                </span>
                                {this.t("priceSingle.serviceHours", {count: this.state.hours})}
                            </p>
                            <Slider
                                value={this.state.hours}
                                min={0}
                                max={30}
                                step={1}
                                onChange={(e, value) => {
                                    this.setState({
                                        hours: value,
                                    });
                                }}
                                style={{width: "80%", margin: "auto"}}
                            />
                            <p className={styles.taxHint}>
                                *{this.t("priceSingle.taxHint")}
                            </p>
                            <Button type="primary" onClick={this.onPurchase}>
                                {this.t("priceSingle.purchase")}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}