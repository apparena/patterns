import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./price-component.scss";
import Col from "../../00-atoms/grid/col";
import Row from "../../00-atoms/grid/row";
import Button from "../../00-atoms/button/button";
import Slider from "../../00-atoms/slider/slider";

export default class PriceComponentSingle extends ReactComponent {
    static propTypes = {
        templateId: PropTypes.string.isRequired,
        plans: PropTypes.object.isRequired,
        onClick: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]).isRequired
    };

    getInitState() {
        return {
            hours: 1
        };
    }

    render() {
        const {showPlans} = this.state;
        const {plans} = this.props;
        return (
            <div>
                <Row>
                    <Col xs="4" xsOffset={4}>
                        <div className={styles.priceSelectorContainer}>
                            <div className={styles.price}>
                                <sup>€</sup>149<sup>*</sup>
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
                            <Button type="primary">
                                {this.t("priceSingle.purchase")}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}