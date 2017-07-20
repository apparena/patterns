import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./price-table.scss";
import Element from "./docs/price-table-element";
import Checkbox from "../../00-atoms/forms/checkbox";
import CustomPackageCreator from "./custom-package-creator/custom-package-creator";
import Col from "../../00-atoms/grid/col";
import Row from "../../00-atoms/grid/row";
import Button from "../../00-atoms/button/button";

export default class PriceTable extends ReactComponent {
    static propTypes = {
        templateId: PropTypes.string.isRequired,
        plans: PropTypes.object.isRequired,
        onClick: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]).isRequired
    };

    getInitState() {
        this.handleCheckbox = ::this.onCheckbox;
        this.handleCustomPackageButton = ::this.onCustomPackageButton;

        return {
            showPlans: "single",
            showCustomPackageCreator: false,
        };
    }

    onCheckbox() {
        this.setState({
            showPlans: (this.state.showPlans === "single") ? "flatrate" : "single"
        });
    }

    onCustomPackageButton(e) {
        this.setState({
            showCustomPackageCreator: true
        });
    }

    /**
     * Renders a package from the provided data.
     *
     * @param showPlans string
     * @returns {XML}
     */
    renderPackage(showPlans) {
        const {plans, templateId, onClick} = this.props;
        return (
            <Row className={styles.priceTableContainer}>
                {plans.plans[showPlans].map((element, i) => {
                    return (
                        <Element
                            onClick={onClick}
                            discount={(showPlans === "single") ? plans.payment.terms.single.discount : plans.payment.terms.yearly.discount}
                            plans={plans}
                            key={`element${i}`}
                            element={element}
                            templateId={templateId}
                            price={element.price}
                            imgSrc={element.img}
                            title={element.title}
                            articles={element.articles}
                            isPopular={element.popular}
                            isFlatrate={showPlans === "flatrate"}
                        />
                    );
                })}
            </Row>
        );
    }

    /**
     * Shows the prompt to create a custom package and includes the custom package creator.
     * The prompt won't be shown if this.props.plans.custom is empty or doesn't exist.
     * @returns {XML}
     */
    renderCustomPackagePrompt() {
        const {plans, onClick, templateId} = this.props;
        if (this.state.showCustomPackageCreator) {
            return (
                <CustomPackageCreator templateId={templateId} onClick={onClick} data={plans}/>
            )
        }
        return (
            <Row justifyContent="center">
                <Col xs="10" md="6" lg="4" className={cx(styles.customPackage)}>
                    <p>
                        {this.t("customPackage.info1")}
                        <br />
                        {this.t("customPackage.info2")}
                    </p>
                    <Button className={styles.customPackageButton}
                            onClick={this.handleCustomPackageButton}
                            type="primary"
                            rounded
                    >
                        {this.t("customPackage.buttonPrompt")}
                    </Button>
                </Col>
            </Row>
        );
    }

    render() {
        const {showPlans} = this.state;
        const {plans} = this.props;
        return (
            <div className={styles.priceTable}>
                <div className={styles.selectorTable}>
                    <div className={styles.selectorTableRow}>
                        <div
                            className={cx(styles.selectorTableCellLeft, showPlans === "single" && styles.selectorTableCellSelected)}
                        >
                            {this.t("priceTable.leftText")}
                        </div>
                        <div className={styles.selectorTableCellMiddle}>
                            <Checkbox
                                className={styles.checkBoxFix}
                                renderTooltip={false}
                                onChange={this.handleCheckbox}
                                checked={showPlans === "flatrate"}
                            />
                        </div>
                        <div
                            className={cx(styles.selectorTableCellRight, showPlans === "flatrate" && styles.selectorTableCellSelected)}
                        >
                            {this.t("priceTable.rightText")}
                        </div>
                    </div>
                </div>

                {this.renderPackage(showPlans)}

                {plans.plans.custom && this.renderCustomPackagePrompt()}
            </div>
        );
    }
}