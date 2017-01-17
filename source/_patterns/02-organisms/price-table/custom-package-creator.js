import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./custom-package-creator.scss";
import Col from "../../00-atoms/grid/col";
import Row from "../../00-atoms/grid/row";
import SelectMenu from "../../00-atoms/forms/select-menu";
import data from "./price-table.json";
import Icon from "../../00-atoms/icons/icons"

export default class CustomPackageCreator extends ReactComponent {
    static propTypes = {
        visible: PropTypes.bool,
    };

    getInitState() {
        return {
            dropdown1Value: "",
            dropdown2Value: "",
            tickedCheckboxes: [],
            counters: [],
            price: 0,
        };
    }

    /**
     * Initialize the this.state.counters array with 10 items set to 1.
     * Since it doesn't make sense to have 0 or less as a value all values should be initialized to 1.
     */
    componentDidMount() {
        let tmp = [];
        for (let i = 0; i < 10; ++i)
            tmp[i] = 1;

        this.setState({
            counters: tmp
        });
    }

    /**
     * Handle selection of dropdown items
     * @param e React Event
     * @param previousValue Value that was previously selected (can be supplied using this.state)
     * @param dataSource Source of the  data
     * @param dropdownSelect Whether to update the state for dropdown #1 or #2
     */
    onDDChange(e, previousValue, dataSource, dropdownSelect) {
        let priceDiff = 0;
        if (previousValue === "") {
            priceDiff = dataSource[e.value].price;
        } else {
            priceDiff = dataSource[e.value].price - dataSource[previousValue].price;
        }

        this.setState({
            price: this.state.price + priceDiff
        });

        if (dropdownSelect === 1) {
            this.setState({
                dropdown1Value: e.value,
            });
        } else if (dropdownSelect === 2) {
            this.setState({
                dropdown2Value: e.value,
            });
        }
    }

    /**
     * onChange handler for checkboxes inside the checkbox list
     * @param e React Event
     */
    onCBChange(e) {
        if (e.target.checked) {
            this.setState({
                tickedCheckboxes: [...this.state.tickedCheckboxes, e.target.id],
                price: this.state.price + parseInt(e.target.value, 10)
            });
        } else {
            let tmp = this.state.tickedCheckboxes;
            let idx = tmp.indexOf(e.target.id);
            tmp.splice(idx, 1);
            this.setState({
                tickedCheckboxes: tmp,
                price: this.state.price - parseInt(e.target.value, 10)
            });
        }
    }

    /**
     * Handle the click of a counter next to a counted checkbox
     * @param e React Event
     * @param i Index of counted checkbox
     * @param price Price of the checkbox
     * @param increase Whether the counter increases(+) or decreases (-)
     * @param affectsPrice Should changing the counter affect the state price
     */
    onCounterClick(e, i, price, increase, affectsPrice) {
        let tmp = this.state.counters;
        let multiplier = 1;
        if (increase) tmp[i]++;
        else {
            tmp[i]--;
            if (tmp[i] < 1) {
                tmp[i] = 1;
                return;
            }
            multiplier = -1;
        }
        this.setState({
            counters: tmp,
            price: this.state.price + (!!affectsPrice * (multiplier * price))
        });
    }

    /**
     * onChange handler for checkboxes in the checkbox list which feature a counter
     * @param e React Event
     * @param i Index of counted checkboxes
     * @param price Price for each checkbox
     */
    onCountedCBChange(e, i, price) {
        if (e.target.checked) {
            this.setState({
                tickedCheckboxes: [...this.state.tickedCheckboxes, e.target.id],
                price: this.state.price + (this.state.counters[i] * price)
            });
        } else {
            let tmp = this.state.tickedCheckboxes;
            let idx = tmp.indexOf(e.target.id);
            tmp.splice(idx, 1);
            this.setState({
                tickedCheckboxes: tmp,
                price: this.state.price - (this.state.counters[i] * price)
            });
        }
    }

    /**
     * Creates nice-looking checkboxes that alter the state price.
     * Automatically recognized checkboxes which need a counter
     *
     * @param dataSource source of the checkboxes
     * @param onChange method that reacts to the onChange event of the checkbox
     * @param idPrefix prefix for the ID to make it unique (only needed when using multiple checkbox lists or incremental IDs would clash)
     * @returns {XML}
     */
    renderCheckboxList(dataSource, onChange, idPrefix) {
        return (
            <ul className={styles.checkboxes}>
                {dataSource.map((e, i) => {
                    return (
                        <li key={i}>
                            {!this.state.tickedCheckboxes.includes(idPrefix + i) &&
                                <Icon name="times-circle-o" className={styles.cbUnchecked} />
                            }
                            {this.state.tickedCheckboxes.includes(idPrefix + i) &&
                                <Icon name="check-circle-o" className={styles.cbChecked} />
                            }
                            {e.labelPlural &&
                                <div className={styles.counter}>
                                    {this.state.counters[i]}
                                </div>
                            }
                            <input id={`${idPrefix}${i}`} type="checkbox" value={e.price}
                                   onChange={e.labelPlural ? (ev) => this.onCountedCBChange(ev, i, e.price) : onChange}
                            />
                            <label htmlFor={`${idPrefix}${i}`}>
                                {e.labelPlural && this.state.counters[i] > 1 ? e.labelPlural : e.label}
                            </label>
                            {e.labelPlural &&
                                <div className={styles.buttonRow}>
                                    <button className={styles.checkboxButton} onClick={(ev) => this.onCounterClick(ev, i, e.price, true, this.state.tickedCheckboxes.includes(idPrefix + i))}>
                                        <Icon name="plus" />
                                    </button>
                                    <button className={styles.checkboxButton} onClick={(ev) => this.onCounterClick(ev, i, e.price, false, this.state.tickedCheckboxes.includes(idPrefix + i))}>
                                        <Icon name="minus" />
                                    </button>
                                </div>
                            }
                        </li>
                    );
                })}
            </ul>
        );
    }

    /**
     * Main render method.
     * @returns {XML}
     */
    render(){
        return (
            <div>
                {this.props.visible && (
                    <div className={styles.packageCreator}>
                        <Row className={styles.headerRow}>
                            <Col md="6" className={styles.titleLeft}>
                                <p>IHR INDIVIDUELLES PAKET</p>
                            </Col>
                            <Col md="4" mdOffset={2} className={styles.sumContainer}>
                                <span id="sum" className={styles.sumDisplay}>
                                    <sup>€</sup>{this.state.price}
                                </span>
                            </Col>
                        </Row>
                        <Row className={styles.contentRow}>
                            <Col md="4" className={styles.dropdownContainer}>
                                <SelectMenu defaultValue={this.state.dropdown1Value}
                                            options={data.custom.dropdown1}
                                            onChange={(ev) => this.onDDChange(ev, this.state.dropdown1Value, data.custom.dropdown1, 1)}
                                />
                                <SelectMenu defaultValue={this.state.dropdown2Value}
                                            options={data.custom.dropdown2}
                                            onChange={(ev) => this.onDDChange(ev, this.state.dropdown2Value, data.custom.dropdown2, 2)}
                                />
                            </Col>
                            <Col md="4">
                                {this.renderCheckboxList(data.custom.checkboxes, ::this.onCBChange, 'middle')}
                            </Col>
                            <Col md="4">
                                {this.renderCheckboxList(data.custom.topRightCheckboxes, ::this.onCBChange, 'topRight')}
                                <div className={styles.rightMiddleHeader}>
                                    <h5>Domain der Kampagnenseite</h5>
                                </div>
                                {this.renderCheckboxList(data.custom.bottomRightCheckboxes, ::this.onCBChange, 'bottomRight')}
                                <div className={styles.purchaseButtonContainer}>
                                    <button className={styles.purchaseButton}>
                                        {this.t("customPackage.purchasePrompt")}Kaufen
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}
            </div>
        );
    }
}