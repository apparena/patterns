import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./price-table.scss";
import Tag from "../../00-atoms/tag/tag";
import Col from "../../00-atoms/grid/col";
import Row from "../../00-atoms/grid/row";

export default class PriceTableElement extends ReactComponent {
    static propTypes = {
        imgSrc: PropTypes.string,
        imgAlt: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number.isRequired,
        information: PropTypes.array,
        subinformation: PropTypes.array,
        buttonPrompt: PropTypes.string,
        id: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        isPopular: PropTypes.bool,
        isFlatrate: PropTypes.bool,
        discount: PropTypes.number,
    };

    /**
     * process the information arrays and apply bold or italic font modifiers.
     * @param element
     * @param i
     * @returns {XML}
     */
    processInformation(element, i) {
        let text = element.text;
        if (element.options.includes("bold"))   text = <b>{text}</b>;
        if (element.options.includes("italic")) text = <i>{text}</i>;

        return (
            <p key={i}>
                {text}
            </p>
        );
    }

    /**
     * Process information and convert it so that it can be rendered easily.
     * Will only be executed on mount (i.e. on page load)
     */
    componentWillMount() {
        this.prepared_information = this.props.information.map((x, i) => {
            return this.processInformation(x, i);
        });
        this.prepared_subinformation = this.props.subinformation.map((x, i) => {
            return this.processInformation(x, i);
        });
    }

    /**
     * Process information and convert it so that it can be rendered easily.
     * Will only be executed when the component changes (i.e. by selecting another package)
     * In this case "nextProps" contains the information we want because this.props still contains
     * old information.
     */
    componentWillUpdate(nextProps, nextState, nextContext) {
        this.prepared_information = nextProps.information.map((x, i) => {
            return this.processInformation(x, i);
        });
        this.prepared_subinformation = nextProps.subinformation.map((x, i) => {
            return this.processInformation(x, i);
        });
    }


    /**
     * Renders the popular Tag
     *
     * @returns {XML}
     */
    renderPopularTag() {
        return (
            <Row>
                <div className={styles.tagContainer}>
                    <Tag type="success" className={styles.tag}>{this.t("priceTableElement.popular")}</Tag>
                </div>
            </Row>
        );
    }

    /**
     * Renders the popular Tag but sets visibility to hidden to keep a uniform alignment.
     *
     * @returns {XML}
     */
    renderPseudoTag() {
        return (
            <Row>
                <div className={styles.tagContainer}>
                    <Tag type="success" className={styles.pseudotag}>{this.t("priceTableElement.popular")}</Tag>
                </div>
            </Row>
        );
    }

    render() {
        return (
            <Col md="3">
                <div className={cx(styles.price_table_element, this.props.isPopular && styles.popularElement)}>
                    {this.props.isPopular ? this.renderPopularTag() : this.renderPseudoTag()}
                    <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
                    <h3>{this.props.title}</h3>
                    <h3><sup>€</sup>{this.props.price}{this.props.isFlatrate && <span>/mtl.*</span>}</h3>
                    <p className={styles.discountText}><sub>{this.props.isFlatrate &&
                             this.t("priceTableElement.discount", {discount: this.props.discount})}</sub></p>
                    <hr className={styles.horizontalDividerLong}/>
                    <div className={styles.infoContainer}>
                        {this.prepared_information}
                    </div>
                    <hr className={styles.horizontalDividerShort}/>
                    <div className={styles.infoContainer}>
                        {this.prepared_subinformation}
                    </div>
                    <button id={this.props.id} className={styles.purchase_button} onClick={this.props.onClick}>
                        {this.props.buttonPrompt}
                    </button>
                </div>
            </Col>
        );
    }
}