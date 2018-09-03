import React from 'react';
import { Notification, PriceTableSingle, ReactComponent } from 'apparena-patterns-react';
import i18n from 'i18n-js';

/* eslint-disable */
//Setting up i18n
i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = {
  en: {
    priceSingle: {
      hours: {
        one: 'hour',
        other: 'hours',
        zero: 'hours'
      },
      hoursPrompt: 'Select how many support hours you need',
      taxHint: '+ taxes',
      purchase: 'Buy',
      title: 'Service'
    }
  }
};
/* eslint-enable */

export default class PriceTableSingleExample extends ReactComponent {
  getInitState() {
    return {
      articles: [{
        price: 2,
        title: 'Example'
      }],
      showNotification: false
    };
  }

  onPurchase(data) {
    this.setState({
      showNotification: true
    });

    setTimeout(() => {
      this.setState({
        showNotification: false
      });
    }, 5000);
  }

  render() {
    const { showNotification } = this.state;

    return [
      <div key="1">
        {showNotification && (
          <Notification
            header="Congratulations on your purchase"
            type="success"
          />
        )}
      </div>,
      <PriceTableSingle
        templateId="1273"
        productId="0"
        onClick={this.onPurchase.bind(this)}
        key="2"
        articles={this.state.articles}
        hoursPrompt={this.t('priceSingle.hoursPrompt')}
        header="Example article"
      />
    ];
  }
}
