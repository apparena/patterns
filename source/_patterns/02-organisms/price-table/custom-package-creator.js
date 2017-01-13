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

    render(){
        return (
            <div>
                {this.props.visible && (
                    <div className={styles.packageCreator}>
                        <Row>
                            <Col md="3" className={styles.titleLeft}>
                                <p>IHR INDIVIDUELLES PAKET</p>
                            </Col>
                            <Col md="3" mdOffset={6} className={styles.sumContainer}>
                                <span id="sum" className={styles.sumDisplay}>
                                    <sup>€{this.state.sum}</sup>
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <SelectMenu defaultValue={this.state.dropdown1Value}
                                            options={data.custom.dropdown1} onChange={::this.onDD1Change}
                                />
                                <SelectMenu defaultValue={this.state.dropdown2Value}
                                            options={data.custom.dropdown2} onChange={::this.onDD2Change}
                                />
                            </Col>
                            <Col md="4">

                            </Col>
                            <Col md="4">

                            </Col>
                        </Row>
                    </div>
                )}
            </div>
        );
    }
}