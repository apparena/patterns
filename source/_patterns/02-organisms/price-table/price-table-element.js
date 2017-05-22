import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./price-table.scss";
import Tag from "../../00-atoms/tag/tag";
import Col from "../../00-atoms/grid/col";
import Row from "../../00-atoms/grid/row";
import Button from "../../00-atoms/button/button";

export default class PriceTableElement extends ReactComponent {
    static propTypes = {
        templateId: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number.isRequired,
        articles: PropTypes.array,
        element: PropTypes.object,
        onClick: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]).isRequired,
        isPopular: PropTypes.bool,
        isFlatrate: PropTypes.bool,
        discount: PropTypes.number,
    };

    getInitState() {
        const {isFlatrate, title, plans, price} = this.props;
        this.purchaseData = {
            title,
            price: plans.basePrice + price,
            flatrate: isFlatrate,
            articles: []
        };
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {isFlatrate, title, plans, price} = nextProps;
        if (this.props !== nextProps) {
            this.purchaseData = {
                title,
                price: plans.basePrice + price,
                flatrate: isFlatrate,
                articles: []
            };
        }
    }


    /**
     * process the information arrays and apply bold or italic font modifiers.
     * @param element
     * @param i
     * @returns {XML}
     */
    processInformation(element, i) {
        let text = element.text;
        if (element.style.includes("bold")) text = <b>{text}</b>;
        if (element.style.includes("italic")) text = <i>{text}</i>;
        if (element.key) {
            this.purchaseData.articles.push(element);
        }
        return (
            <p key={i}>
                {text}
            </p>
        );
    }

    renderInfoBlocks(block, i) {
        return (
            <div key={i}>
                <div className={styles.infoContainer}>
                    {block.map(::this.processInformation)}
                </div>
                {(i + 1 < this.props.articles.length) && <hr className={styles.horizontalDividerShort}/>}
            </div>
        )
    }

    /**
     * Renders the popular Tag
     *
     * @returns {XML}
     */
    renderPopularTag() {
        return (
            <Tag type="success" className={styles.tag}>{this.t("priceTableElement.popular")}</Tag>
        );
    }

    /**
     * Prepare & execute purchase
     */
    onPurchase() {
        this.props.onClick(this.purchaseData)
    }

    renderButton() {
        const {onClick, templateId} = this.props;
        if (typeof onClick === "function") {
            return (
                <Button className={styles.purchase_button}
                        onClick={::this.onPurchase}
                        type="primary"
                        rounded
                >
                    {this.t("priceTableElement.button.caption")}
                </Button>
            )
        }
        const utf8_to_b64 = (str) => {
            return window.btoa(encodeURIComponent(str));
        };
        return (
            <Button className={styles.purchase_button}
                    type="primary"
                    rounded
                    href={`${onClick}?templateId=${templateId}&orderData=${utf8_to_b64(JSON.stringify(this.purchaseData))}`}
            >
                {this.t("priceTableElement.button.caption")}
            </Button>
        )
    }

    render() {
        return (
            <Col xs="12" md="6" lg="3" className={styles.priceTableElementContainer}>
                <div className={cx(styles.priceTableElement, this.props.isPopular && styles.popularElement)}>
                    <Row>
                        <Col xs="12" className={styles.tagContainer}>
                            {this.props.isPopular && this.renderPopularTag()}
                        </Col>
                    </Row>
                    <div className={styles.imgContainer}>
                        <img src={this.props.imgSrc} alt="presentation"/>
                    </div>
                    <h3>{this.props.title}</h3>
                    <h3>
                        <sup>€</sup>{(this.props.isFlatrate) ? this.props.price : (this.props.plans.basePrice + this.props.price)}{this.props.isFlatrate &&
                    <span>/mtl.*</span>}</h3>
                    <p className={styles.discountText}>
                        <sub>
                            {this.props.isFlatrate && this.t("priceTableElement.discount", {discount: this.props.discount})}
                        </sub>
                    </p>
                    <hr className={styles.horizontalDividerLong}/>
                    {this.props.articles.map(::this.renderInfoBlocks)}
                    {this.renderButton()}
                </div>
            </Col>
        );
    }
}