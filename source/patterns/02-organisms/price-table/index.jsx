import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component/index';
import cx from 'classnames';
import styles from './index.module.scss';
import Element from './docs/price-table-element';
import Checkbox from '../../00-atoms/forms/checkbox/index';
import CustomPackage from './custom-package-creator';
import Col from '../../00-atoms/grid/col/index';
import Row from '../../00-atoms/grid/row/index';
import Button from '../../00-atoms/button/Button';

export default class PriceTable extends ReactComponent {


    getInitState() {
        this.handleCheckbox = this.onCheckbox.bind(this);
        this.handleCustomPackageButton = this.onCustomPackageButton.bind(this);

        return {
            showPlans: 'single',
            showCustomPackageCreator: false
        };
    }

    onCheckbox() {
        this.setState({
            showPlans: (this.state.showPlans === 'single') ? 'flatrate' : 'single'
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
     * @param showPlans string
     * @returns {XML}
     */
    renderPackage(showPlans) {
        const {plans, templateId, onClick, productId} = this.props;
        return (
            <Row className={styles.priceTableContainer}>
                {plans.plans[showPlans].map((element, i) => {
                    return (
                        <Element
                            onClick={onClick}
                            discount={(showPlans === 'single') ? plans.payment.terms.single.discount : plans.payment.terms.yearly.discount}
                            plans={plans}
                            key={`element${i}`}
                            element={element}
                            templateId={templateId}
                            productId={productId}
                            price={element.price}
                            imgSrc={element.img}
                            title={element.title}
                            articles={element.articles}
                            isPopular={element.popular}
                            isFlatrate={showPlans === 'flatrate'}
                        />
                    );
                })}
            </Row>
        );
    }

    /**
     * Shows the prompt to create a custom package and includes the custom package creator.
     * The prompt won't be shown if this.props.plans.custom is empty or doesn't exist.
     * @returns {XML}
     */
    renderCustomPackagePrompt() {
        const {plans, onClick, templateId} = this.props;
        if (this.state.showCustomPackageCreator) {
            return (
                <CustomPackage templateId={templateId} onClick={onClick} data={plans}/>
            );
        }
        return (
            <Row justifyContent="center">
                <Col xs="10" md="6" lg="4" className={cx(styles.customPackage)}>
                    <p>
                        {this.t('customPackage.info1')}
                        <br/>
                        {this.t('customPackage.info2')}
                    </p>
                    <Button className={styles.customPackageButton}
                           onClick={this.handleCustomPackageButton}
                           type="primary"
                           rounded
                    >
                        {this.t('customPackage.buttonPrompt')}
                    </Button>
                </Col>
            </Row>
        );
    }

    render() {
        const {showPlans} = this.state;
        const {plans} = this.props;
        return (
            <div className={styles.priceTable}>
                <div className={styles.selectorTable}>
                    <div className={styles.selectorTableRow}>
                        <div
                            className={cx(styles.selectorTableCellLeft, showPlans === 'single' && styles.selectorTableCellSelected)}
                        >
                            {this.t('priceTable.leftText')}
                        </div>
                        <div className={styles.selectorTableCellMiddle}>
                            <Checkbox
                                className={styles.checkBoxFix}
                                renderTooltip={false}
                                onChange={this.handleCheckbox}
                                checked={showPlans === 'flatrate'}
                            />
                        </div>
                        <div
                            className={cx(styles.selectorTableCellRight, showPlans === 'flatrate' && styles.selectorTableCellSelected)}
                        >
                            {this.t('priceTable.rightText')}
                        </div>
                    </div>
                </div>

                {this.renderPackage(showPlans)}

                {plans.plans.custom && this.renderCustomPackagePrompt()}
            </div>
        );
    }
}

PriceTable.propTypes = {
  /**
   * Set the App-Manager template ID
   */
  templateId: PropTypes.string,
  /**
   * Set the App-Manager product ID
   */
  productId: PropTypes.string,
  /**
   * Define the object which determines which plans are shown.
   */
  plans: PropTypes.object.isRequired,
  /**
   * Define an onClick handler as either a custom function or an URL
   */
  onClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]).isRequired
};
