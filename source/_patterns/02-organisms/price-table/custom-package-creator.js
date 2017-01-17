import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./custom-package-creator.scss";
import Col from "../../00-atoms/grid/col";
import Row from "../../00-atoms/grid/row";
import SelectMenu from "../../00-atoms/forms/select-menu";
import data from "./price-table.json";

export default class CustomPackageCreator extends ReactComponent {
    static propTypes = {
        visible: PropTypes.bool,
    };

    getInitState() {
        return {
            dropdown1Value: "",
            dropdown2Value: "",
            tickedCheckboxes: [],
            price: 0,
        };
    }

    onDD1Change(e) {
        this.setState({
            dropdown1Value: e.value
        });
    }

    onDD2Change(e) {
        this.setState({
            dropdown2Value: e.value
        });
    }

    onCBChange(e) {
        if (e.target.checked) {
            this.setState({
                tickedCheckboxes: [...this.state.tickedCheckboxes, parseInt(e.target.id, 10)],
                price: this.state.price + parseInt(e.target.value, 10)
            });
        } else {
            let tmp = this.state.tickedCheckboxes;
            let idx = tmp.indexOf(parseInt(e.target.id, 10));
            tmp.splice(idx, 1);
            this.setState({
                tickedCheckboxes: tmp,
                price: this.state.price - parseInt(e.target.value, 10)
            });
        }
    }

    renderCheckboxList(dataSource, onChange) {
        return (
            <ul className={styles.checkboxes}>
                {dataSource.map((e, i) => {
                    return (
                        <li key={i}>
                            {!this.state.tickedCheckboxes.includes(i) &&
                                <span className={cx("fa fa-times-circle-o", styles.cbUnchecked)} />
                            }
                            {this.state.tickedCheckboxes.includes(i) &&
                                <span className={cx("fa fa-check-circle-o", styles.cbChecked)} />
                            }
                            <input id={i} type="checkbox" value={e.price} onChange={onChange}/>
                            <label htmlFor={i}>{e.label}</label>
                        </li>
                    );
                })}
            </ul>
        );
    }

    render(){
        return (
            <div>
                {this.props.visible && (
                    <div className={styles.packageCreator}>
                        <Row className={styles.headerRow}>
                            <Col md="3" className={styles.titleLeft}>
                                <p>IHR INDIVIDUELLES PAKET</p>
                            </Col>
                            <Col md="3" mdOffset={6} className={styles.sumContainer}>
                                <span id="sum" className={styles.sumDisplay}>
                                    <sup>€{this.state.price}</sup>
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" className={styles.dropdownContainer}>
                                <SelectMenu defaultValue={this.state.dropdown1Value}
                                            options={data.custom.dropdown1} onChange={::this.onDD1Change}
                                />
                                <SelectMenu defaultValue={this.state.dropdown2Value}
                                            options={data.custom.dropdown2} onChange={::this.onDD2Change}
                                />
                            </Col>
                            <Col md="4">
                                {this.renderCheckboxList(data.custom.checkboxes, ::this.onCBChange)}
                            </Col>
                            <Col md="4">
                                {this.renderCheckboxList(data.custom.topRightCheckboxes, ::this.onCBChange)}
                            </Col>
                        </Row>
                    </div>
                )}
            </div>
        );
    }
}