import React from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./price-table.scss";
import data from "./price-table.json";
import Element from "./price-table-element";
import Checkbox from "../../00-atoms/forms/checkbox";
import CustomPackageCreator from "./custom-package-creator";
import Col from "../../00-atoms/grid/col";
import Row from "../../00-atoms/grid/row";

export default class PriceTable extends ReactComponent {
    getInitState() {
        this.handleButtonClick = ::this.onButtonClick;
        this.handleCheckbox = ::this.onCheckbox;
        this.handleCustomPackageButton = ::this.onCustomPackageButton;

        return {
            isChecked: false,
            showCustomPackageCreator: false
        };
    }

    /**
     * Every Button will have an ID in the format of "<package><index" ex. "flatrate4" thus two
     * regexes are used to extract these and retrieve the proper information.
     */
    onButtonClick(e) {
        const regex = /(single|flatrate)/g;
        const match = regex.exec(e.target.id);
        let foundPackage = "";
        if (match !== null)
            foundPackage = match[0];

        if (foundPackage === "single") foundPackage = data.single;
        else if (foundPackage === "flatrate") foundPackage = data.flatrate;
        /*else return;

        regex = /\d+/g;
        match = regex.exec(e.target.id);
        let index = -1;
        if (match !== null)
            index = match[0];

        const price = foundPackage.elements[index].price;*/
    }

    onCheckbox(e) {
        this.setState({
            isChecked: e.target.checked === true
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
     * @param selection string
     * @returns {XML}
     */
    renderPackage(selection) {
        let selectedPackage = "";
        if (selection === "single") selectedPackage = data.single;
        else if (selection === "flatrate") selectedPackage = data.flatrate;

        return (
            <Row className={styles.price_container}>
                {selectedPackage.elements.map((e, i) => {
                    return (
                        <Element id={`${selection}${i}`} key={`${selection}-element${i}`} price={e.price}
                                 imgSrc={e.img} imgAlt={e.imgAlt} title={e.title} information={e.info}
                                 subinformation={e.info2} isPopular={e.popular === 1}
                                 isFlatrate={selection === "flatrate"} buttonPrompt={e.prompt}
                                 onClick={this.handleButtonClick} discount={data.flatrate.discount}
                        />
                    );
                })}
            </Row>
        );
    }

    render() {
        return (
            <div className={styles.price_table}>
                <Col md="4" mdOffset={4} className={styles.priceTableHeader}>
                    <hr className={styles.blueDivider}/>
                    <p>{this.t("priceTable.header")}.</p>
                </Col>
                <div className={styles.selectorTable}>
                    <div className={styles.selectorTableRow}>
                        <div
                            className={cx(styles.selectorTableCellLeft, !this.state.isChecked && styles.selectorTableCellSelected)}
                        >
                            {this.t("priceTable.leftText")}
                        </div>
                        <div className={styles.selectorTableCellMiddle}>
                            <Checkbox className={styles.checkBoxFix} onChange={this.handleCheckbox}
                                      checked={this.state.isChecked}
                            />
                        </div>
                        <div
                            className={cx(styles.selectorTableCellRight, this.state.isChecked && styles.selectorTableCellSelected)}
                        >
                            {this.t("priceTable.rightText")}
                        </div>
                    </div>
                </div>

                {(this.state.isChecked === true) ? this.renderPackage("flatrate") : this.renderPackage("single")}

                <Col md="4" mdOffset={4} className={cx(styles.customPackage,
                    this.state.showCustomPackageCreator && styles.invisible)}>
                    <p>
                        {this.t("customPackage.info1")}
                        <br />
                        {this.t("customPackage.info2")}
                    </p>
                    <button id="customPackage" className={styles.customPackageButton}
                            onClick={this.handleCustomPackageButton}
                    >
                        {this.t("customPackage.buttonPrompt")}
                    </button>
                </Col>

                <CustomPackageCreator visible={this.state.showCustomPackageCreator}/>
            </div>
        );
    }
}