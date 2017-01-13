import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./price-table.scss";
import Tag from "../../00-atoms/tag/tag";

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
    };

    /**
     * Process information and convert it so that it can be rendered easily.
     * Will only be executed on mount (i.e. on page load)
     */
    componentWillMount() {
        this.prepared_information = this.props.information.map((x, i) => {return <p key={i}>{x}</p>});
        this.prepared_subinformation = this.props.subinformation.map((x, i) => {return <p key={i}>{x}</p>});
    }

    /**
     * Process information and convert it so that it can be rendered easily.
     * Will only be executed when the component changes (i.e. by selecting another package)
     * In this case "nextProps" contains the information we want because this.props still contains
     * old information.
     */
    componentWillUpdate(nextProps, nextState, nextContext) {
        this.prepared_information = nextProps.information.map((x, i) => {return <p key={i}>{x}</p>});
        this.prepared_subinformation = nextProps.subinformation.map((x, i) => {return <p key={i}>{x}</p>});
    }


    /**
     * Renders the popular Tag
     *
     * @returns {XML}
     */
    renderPopularTag() {
        return (
            <div className="row">
                <Tag type="success" className={styles.tag}>Beliebt</Tag>
            </div>
        );
    }

    /**
     * Renders the popular Tag but sets visibility to hidden to keep a uniform alignment.
     *
     * @returns {XML}
     */
    renderPseudoTag() {
        return (
            <div className="row">
                <Tag type="success" className={styles.pseudotag}>Beliebt</Tag>
            </div>
        );
    }

    render() {
        return (
            <div className="col-md-3">
                <div className={cx(styles.price_table_element)}>
                    {this.props.isPopular ? this.renderPopularTag() : this.renderPseudoTag()}
                    <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
                    <h3>{this.props.title}</h3>
                    <h3><sup>€</sup>{this.props.price}{this.props.isFlatrate && <sub>/mtl</sub>}</h3>
                    <hr className={styles.horizontalDividerLong} />
                    <div className={styles.infoContainer}>
                        {this.prepared_information}
                    </div>
                    <hr className={styles.horizontalDividerShort} />
                    <div className={styles.infoContainer}>
                        {this.prepared_subinformation}
                    </div>
                    <button id={this.props.id} className={styles.purchase_button} onClick={this.props.onClick}>
                        {this.props.buttonPrompt}
                    </button>
                </div>
            </div>
        );
    }
}