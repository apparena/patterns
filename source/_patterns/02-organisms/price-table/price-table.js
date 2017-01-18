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
        return {
            isChecked: false,
            showCustomPackageCreator: true
        };
    }

    /**
     * Every Button will have an ID in the format of "<package><index" ex. "flatrate4" thus two
     * regexes are used to extract these and retrieve the proper information.
     */
    handleButtonClick(e) {
        let regex = /(single|flatrate)/g;
        let match = regex.exec(e.target.id);
        let foundPackage = "";
        if (match !== null)
            foundPackage = match[0];

        if (foundPackage === "single") foundPackage = data.single;
        else if (foundPackage === "flatrate") foundPackage = data.flatrate;
        else return;

        regex = /\d+/g;
        match = regex.exec(e.target.id);
        let index = -1;
        if (match !== null)
            index = match[0];

        let price = this.state.isChecked ? foundPackage.elements[index].price : foundPackage.elements[index].price;
        let message = `Sie haben ein Paket für ${price}€${(this.state.isChecked) ? " pro Monat" : ""} gekauft`;
        console.log(message);
    }

    handleCheckbox(e) {
        this.setState({
            isChecked: e.target.checked === true
        });
    }

    handleCustomPackageButton(e) {
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
                                 onClick={::this.handleButtonClick}
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
                    {this.t("priceTable.header")}
                    <p>Preise.</p>
                </Col>
                <div className={styles.selectorTable}>
                    <div className={styles.selectorTableRow}>
                        <div
                            className={cx(styles.selectorTableCellLeft, !this.state.isChecked && styles.selectorTableCellSelected)}>
                            {this.t("priceTable.leftText")}
                            Einzelpakete
                        </div>
                        <div className={styles.selectorTableCellMiddle}>
                            <Checkbox className={styles.checkBoxFix} onChange={::this.handleCheckbox}
                                      checked={this.state.isChecked}/>
                        </div>
                        <div
                            className={cx(styles.selectorTableCellRight, this.state.isChecked && styles.selectorTableCellSelected)}>
                            {this.t("priceTable.rightText")}
                            Flatratepakete
                        </div>
                    </div>
                </div>

                {(this.state.isChecked === true) ? this.renderPackage("flatrate") : this.renderPackage("single")}

                <Col md="4" mdOffset={4} className={cx(styles.customPackage,
                    this.state.showCustomPackageCreator && styles.invisible)}>
                    <p>{this.t("customPackage.info")}</p>
                    <p>Nichts passendes dabei?<br/>
                        Kein Problem, stellen Sie hier Ihr eigenes Paket zusammen!<br /></p>
                    <button id="customPackage" className={styles.customPackageButton}
                            onClick={::this.handleCustomPackageButton}
                    >
                        {this.t("customPackage.buttomPrompt")}
                        Eigenes Paket erstellen
                    </button>
                </Col>

                <CustomPackageCreator visible={this.state.showCustomPackageCreator}/>
            </div>
        );
    }
}