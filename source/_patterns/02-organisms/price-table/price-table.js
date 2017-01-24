import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./price-table.scss";
import Element from "./price-table-element";
import Checkbox from "../../00-atoms/forms/checkbox";
import CustomPackageCreator from "./custom-package-creator";
import Col from "../../00-atoms/grid/col";
import Row from "../../00-atoms/grid/row";
import AJAXLoader from "../../01-molecules/ajax-loader/ajax-loader";

export default class PriceTable extends ReactComponent {
    getInitState() {
        this.handleCheckbox = ::this.onCheckbox;
        this.handleCustomPackageButton = ::this.onCustomPackageButton;

        return {
            isChecked: false,
            showCustomPackageCreator: false,
            dataLoaded: false,
        };
    }

    static propTypes = {
        dataRoute: PropTypes.string.isRequired,
    };

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
        if (selection === "single") selectedPackage = this.data.single;
        else if (selection === "flatrate") selectedPackage = this.data.flatrate;

        return (
            <Row className={styles.price_container}>
                {selectedPackage.elements.map((e, i) => {
                    return (
                        <Element id={`${selection}${i}`} key={`${selection}-element${i}`} price={e.price}
                                 imgSrc={e.img} imgAlt={e.imgAlt} title={e.title} information={e.info}
                                 isPopular={e.popular === 1}
                                 isFlatrate={selection === "flatrate"} button={e.cta}
                                 discount={this.data.flatrate.discount}
                        />
                    );
                })}
            </Row>
        );
    }

    /**
     * Shows the prompt to create a custom package and includes the custom package creator.
     * The prompt won't be shown if this.data.custom is empty or doesn't exist.
     * @returns {XML}
     */
    renderCustomPackagePrompt() {
        return (
            <div>
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

                <CustomPackageCreator data={this.data} visible={this.state.showCustomPackageCreator}/>
            </div>
        );
    }

    /**
     * Display the main part of this component
     * @returns {XML}
     */
    renderMainSection() {
        return (
            <div>
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

                {this.data.custom && this.renderCustomPackagePrompt()}
            </div>
        );
    }

    render() {
        return (
            <div className={styles.priceTable}>
                {!this.state.dataLoaded &&
                <AJAXLoader resource={this.props.dataRoute} autoHide={false}
                            onLoadingDone={(resp) => {
                                this.data = resp.data;
                                this.setState({
                                    dataLoaded: true
                                });
                            }}
                />
                }
                {this.state.dataLoaded && this.renderMainSection()}
            </div>
        );
    }
}