import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component';
import styles from './index.scss';
import Col from '../../00-atoms/grid/col';
import Row from '../../00-atoms/grid/row';
import Button from '../../00-atoms/button/button';
import Slider from '../../00-atoms/slider/slider';

export default class PriceComponentSingle extends ReactComponent {
    static propTypes = {
        templateId: PropTypes.string,
        productId: PropTypes.string,
        onClick: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ]).isRequired,
        hoursPrompt: PropTypes.string,
        header: PropTypes.string,
        articles: PropTypes.array
    };

    getInitState() {
        this.handlePurchase = ::this.onPurchase;
        const {title, articles} = this.props;
        this.purchaseData = {
            title,
            price: articles[0].price,
            flatrate: false,
            articles
        };
        return {
            hours: 1
        };
    }

    /**
     * Prepare & execute purchase
     */
    onPurchase() {
        this.props.onClick(this.purchaseData);
    }

    renderButton() {
        const {onClick, templateId, productId} = this.props;
        if (typeof onClick === 'function') {
            return (
                <Button type="primary" onClick={this.handlePurchase} className={styles.purchaseButton}>
                    {this.t('priceSingle.purchase')}
                </Button>
            );
        }

        let href = '';

        const utf8ToB64 = (str) => {
            return window.btoa(encodeURIComponent(str));
        };

        if (templateId) {
            href = `${onClick}?templateId=${templateId}&orderData=${utf8ToB64(JSON.stringify(this.purchaseData))}`;
        } else if (productId) {
            href = `${onClick}?productId=${productId}&orderData=${utf8ToB64(JSON.stringify(this.purchaseData))}`;
        }

        return (
            <Button type="primary" href={href} className={styles.purchaseButton}>
                {this.t('priceSingle.purchase')}
            </Button>
        );
    }

    renderNoPriceButton() {
        let href = '';
        const {onClick, templateId, productId} = this.props;

        if (templateId) {
            href = `${onClick}?templateId=${templateId}`;
        } else if (productId) {
            href = `${onClick}?productId=${productId}`;
        }

        return (
            <Button type="primary" href={href} className={styles.purchaseButton}>
                {this.t('priceSingle.purchase')}
            </Button>
        );
    }

    renderScreen() {
        return (
            <div>
                <Row className={styles.header}>
                    <Col xs="4" className={styles.price}>
                        <sup>€</sup>
                        <span>{this.state.hours * this.props.articles[0].price}</span>
                        <sup>*</sup>
                    </Col>
                    <Col xs="6" className={styles.leftAlign}>
                        <h3>{this.props.header}</h3>
                    </Col>
                </Row>
                <p className={styles.priceServicePrompt}>
                    {this.props.hoursPrompt}
                </p>
                <p className={styles.serviceHours}>
                                <span className={styles.serviceHourNumber}>
                                    {this.state.hours}
                                </span>
                    {this.t('priceSingle.hours', {count: this.state.hours})}
                </p>
                <Slider
                    value={this.state.hours}
                    min={1}
                    max={30}
                    step={1}
                    onChange={(e, value) => {
                        this.setState({
                            hours: value
                        });

                        this.purchaseData.price = this.props.articles[0].price * value;
                        this.purchaseData.articles[0].value = value;
                        this.purchaseData.articles[0].text = `${this.purchaseData.articles[0].title} - ${value} ${this.t('priceSingle.hours', {count: value})}`;
                        this.forceUpdate();
                    }}
                    style={{width: '80%', margin: 'auto'}}
                />
                <p className={styles.taxHint}>
                    *{this.t('priceSingle.taxHint')}
                </p>
            </div>
        );
    }

    render() {
        if (this.props.articles[0].price) {
            return (
                <div>
                    <Row>
                        <Col xs="10" xsOffset={1}
                             sm="8" smOffset={2}
                             md="6" mdOffset={3}
                             lg="4" lgOffset={4}
                        >
                            <div className={styles.priceSelectorContainer}>
                                {this.renderScreen()}
                                {this.renderButton()}
                            </div>
                        </Col>
                    </Row>
                </div>
            );
        }

        return (
            <div>
                <Row>
                    <Col xs="10" xsOffset={1}
                         sm="8" smOffset={2}
                         md="6" mdOffset={3}
                         lg="4" lgOffset={4}
                    >
                        {this.renderNoPriceButton()}
                    </Col>
                </Row>
            </div>
        );
    }
}