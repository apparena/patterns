import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./custom-package-creator.scss";
import Col from "../../00-atoms/grid/col";
import Row from "../../00-atoms/grid/row";
import SelectMenu from "../../00-atoms/forms/select-menu";
import Icon from "../../00-atoms/icons/icons";
import Button from "../../00-atoms/button/button";
import AnimatedNumber from "react-animated-number";
import Slider from "../../00-atoms/slider/slider";

export default class CustomPackageCreator extends ReactComponent {
    static propTypes = {
        data: PropTypes.object.isRequired,
        onClick: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]).isRequired,
    };

    getInitState() {
        return {
            moreLanguagesBookable: this.props.data.languages !== undefined && this.props.data.languages.length > 0,
            showLanguageSelector: false,
            ...this.generateStartState()
        };
    }

    generateStartState() {
        const {data} = this.props;
        const state = {
            price: data.basePrice,
        };
        data.plans.custom.articles.forEach((articles) => {
            if (Array.isArray(articles)) {
                articles.forEach((article) => {
                    state[article.key] = article.value;
                    if (article.value === true && article.price) {
                        state.price += article.price;
                    }
                    if (article.key === 'service') {
                        state.price += article.options[article.value].price
                    }
                })
            }
        });
        this.purchaseData = {
            title: data.plans.custom.title,
            price: state.price,
            flatrate: false,
            articles: []
        };
        return {
            ...state
        }
    }

    /**
     * Prepare & execute purchase
     */
    onPurchase() {
        this.props.onClick(this.purchaseData)
    }

    /**
     * Renders a list of selected languages with the ability to add more.
     * @param article
     * @param i index
     * @returns {XML}
     */
    renderLanguageSelector(article, i) {
        return (
            <div className={styles.languageSelectorContainer} key={`article-${i}`}>
                <div className={styles.headline}>
                    {this.t("customPackage.languagesSelected", {count: this.state[article.key].length})}
                </div>
                {this.state[article.key].map((e, i) => {
                    const languageData = this.props.data.languages.filter((language, i) => {
                        return language.key === e;
                    });
                    return (
                        <div key={i}>
                            <img
                                className={styles.flag}
                                src={`https://my.app-arena.com/img/flags/32/${e.substring(3, 5).toLowerCase()}.png`}
                                alt="flag"
                            />
                            {languageData[0].value}
                            {e !== this.props.data.defaultLanguage &&
                            <span
                                className={styles.removeLanguageButton}
                                onClick={() => {
                                    const newState = this.state[article.key].filter((lang) => {
                                        return (lang !== e)
                                    });
                                    this.setState({
                                        [article.key]: newState,
                                        price: this.state.price - languageData[0].price
                                    });
                                }}
                            >
                                <Icon name="close"/>
                            </span>
                            }
                        </div>
                    );
                })}
                {this.props.data.languages.length > this.state[article.key].length &&
                <div className={cx(styles.addLanguageButton, !this.state.moreLanguagesBookable && styles.invisible)}
                     onClick={(e) => {
                         this.setState({
                             showLanguageSelector: !this.state.showLanguageSelector
                         });
                     }}
                >
                    <Icon name="plus" className={styles.icon}/>
                    {this.t("customPackage.addLanguagePrompt")}
                </div>
                }
                {this.state.showLanguageSelector &&
                <div className={cx(styles.languageList)}>
                    {this.props.data.languages.map((e, i) => {
                        if (!!~this.state[article.key].indexOf(e.key)) {
                            return null;
                        }
                        return (
                            <div key={i} className={styles.addLanguageButton}
                                 onClick={() => {
                                     this.setState({
                                         [article.key]: [...this.state[article.key], e.key],
                                         price: this.state.price + e.price,
                                         showLanguageSelector: !this.state.showLanguageSelector
                                     });
                                 }}
                            >
                                <img
                                    className={styles.flag}
                                    src={`https://my.app-arena.com/img/flags/32/${e.key.substring(3, 5).toLowerCase()}.png`}
                                    alt="flag"
                                />
                                {e.value} - {e.price}€
                            </div>
                        );
                    })}
                </div>
                }
            </div>
        );
    }

    selectArticle(article) {
        this.setState({
            price: (this.state[article.key]) ? this.state.price - article.price : this.state.price + article.price,
            [article.key]: !this.state[article.key]
        });
    }

    renderArticle(article, i) {
        this.purchaseData.articles = this.purchaseData.articles.filter((purchase) => {
            return (purchase.key !== article.key)
        });
        const {includedIf, options, ...rest} =  article;
        if (article.key && ((!article.includedIf && this.state[article.key] !== false) || (includedIf && this.state.service >= includedIf.value))) {
            this.purchaseData.articles.push({
                ...rest,
                price: this.state.price,
                value: this.state[article.key]
            });
        }
        switch (article.key) {
            case "validity":
            case "participants":
                const options = Object.keys(article.options).map((option, i) => {
                    return {
                        label: article.options[option].text,
                        value: parseInt(option, 10)
                    }
                });
                return (
                    <div className={styles.dropdown} key={`article-${i}`}>
                        <SelectMenu defaultValue={this.state[article.key]}
                                    options={options}
                                    onChange={(obj) => {
                                        this.setState({
                                            [article.key]: obj.value,
                                            price: (this.state.price - article.options[this.state[article.key]].price) + article.options[obj.value].price
                                        });
                                    }}
                        />
                    </div>
                );
            case "languages":
                return this.renderLanguageSelector(article, i);
            case "service":
                return (
                    <div key={`article-${i}`}>
                        <h5 className={styles.serviceHours}>
                                <span className={styles.serviceHourNumber}>
                                    {this.state[article.key]}
                                </span>
                            {this.t("customPackage.serviceHours")}
                        </h5>
                        <Slider step={1}
                                max={30}
                                value={this.state[article.key]}
                                onChange={(e, value) => {
                                    if (article.options[value]) {
                                        this.setState({
                                            [article.key]: value,
                                            price: (this.state.price - article.options[this.state[article.key]].price) + article.options[value].price
                                        });
                                    }
                                }}
                                style={{width: "100%"}}
                        />
                    </div>
                );
            case "intro_webinar":
            case "support_email":
            case "support_phone":
            case "service_agent_approval":
            case "service_agent_dedicated":
            case "css_implementation":
            case "design_creation":
            case "full_setup":
            case "ad_management":
            case "analytics_monitoring":
                const checked = (this.state.service >= article.includedIf.value);
                return (
                    <div key={`article-${i}`}>
                        <Icon fixedWidth name={checked ? "check" : "close"}
                              className={cx(styles.checkboxIcon, checked && styles.cbChecked)}
                        />
                        {this.t(`priceTable.articles.${article.key}`)}
                    </div>
                );
            case "css_editable":
            case "campaign_page":
            case "subdomain":
            case "custom_domain":
                return (
                    <div
                        key={`article-${i}`}
                        onClick={this.selectArticle.bind(this, article)}
                        className={cx(styles.checkboxLine)}
                    >
                        <Icon
                            fixedWidth name={this.state[article.key] ? "check" : "close"}
                            className={cx(styles.checkboxIcon, this.state[article.key] && styles.cbChecked)}
                        />
                        {this.t(`priceTable.articles.${article.key}`)}
                    </div>
                );
            default:
                console.warn(`${article.key} not valid`);
                return null;
        }
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
        return (
            <Button className={styles.purchase_button}
                    type="primary"
                    rounded
                    href={`${onClick}?templateId=${templateId}&orderData=${btoa(JSON.stringify(this.purchaseData))}`}
            >
                {this.t("priceTableElement.button.caption")}
            </Button>
        )
    }

    renderCustomCols(column, i) {
        return (
            <Col md="12" lg="4" key={`col-${i}`} className={styles.column}>
                <p className={styles.advisorText}>
                    {this.t(`customPackage.step${i + 1}Hint`)}
                </p>
                {column.map(::this.renderArticle)}
            </Col>
        )
    }

    render() {
        const {data} = this.props;
        return (
            <Row className={styles.customPackageContainer}>
                <Col xs="12">
                    <div className={styles.customPackageInnerContainer}>
                        <Row>
                            <Col md="6" className={styles.titleLeft}>
                                <img src={data.plans.custom.img} alt="Logo"
                                     className={!data.plans.custom.img && styles.invisible}
                                />
                                <p>{data.plans.custom.title}</p>
                            </Col>
                            <Col md="4" mdOffset={2} className={styles.sumContainer}>
                            <span id="sum" className={styles.sumDisplay}>
                                <sup>€</sup>
                                <AnimatedNumber component="text" value={this.state.price}
                                                style={{
                                                    transition: '0.8s ease-out',
                                                    transitionProperty: 'background-color, color, opacity'
                                                }}
                                                duration={300}
                                                stepPrecision={0}
                                />
                            </span>
                            </Col>
                        </Row>
                        <Row className={styles.customRow}>
                            {data.plans.custom.articles.map(::this.renderCustomCols)}
                        </Row>
                        <Row>
                            {this.renderButton()}
                        </Row>
                    </div>
                </Col>
            </Row>
        )
    }
}