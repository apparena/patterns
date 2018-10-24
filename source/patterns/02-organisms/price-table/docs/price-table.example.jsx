import React from 'react';
import { Notification, PriceTable, ReactComponent } from 'apparena-patterns-react';
import axios from 'axios';
import i18n from 'i18n-js';

/* eslint-disable */
//Setting up i18n
i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = {
  en: {
    priceTable: {
      leftText: 'One time usage',
      rightText: 'Flatrate',
      header: 'Prices',
      articles: {
        intro_webinar: 'Introduction webinar',
        support_email: 'Support via email',
        support_phone: 'Support via telephone',
        service_agent_approval: 'PM review',
        service_agent_dedicated: 'PM consultation',
        css_implementation: 'CSS implementation',
        design_creation: 'Graphic creation',
        full_setup: 'App setung',
        ad_management: 'Ad management',
        analytics_monitoring: 'Reporting and analytics',
        css_editable: 'Open CSS',
        campaign_page: 'Campaign page',
        subdomain: 'Subdomain (e.g. mysubdomain.onlineapp.co)',
        custom_domain: 'Custom domain'
      }
    },
    priceTableElement: {
      popular: 'POPULAR',
      button: {
        caption: 'Buy'
      },
      discount: '*{{discount}}% discount on yearly payment'
    },
    customPackage: {
      info1: 'Found nothing?',
      info2: 'No problem. Configure your custom package',
      buttonPrompt: 'Create custom package',
      addLanguagePrompt: 'more languages (from 250€ on)',
      step1Hint: 'Enter your basic setup',
      step2Hint: 'Select your support',
      step3Hint: 'Wher do you want to publish?',
      rightCenterHeader: 'Domain of campaign page',
      purchasePrompt: 'Buy',
      serviceHours: 'Service hours',
      languagesSelected: {
        one: '{{count}} languages selected',
        other: '{{count}} languages selected',
        zero: 'No language selected'
      }
    },
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

export default class PriceTableExample extends ReactComponent {
  getInitState() {
    return {
      plans: {},
      showNotification: false,
    };
  }

  componentWillMount() {
    axios.get('https://www.app-arena.com/en/wp-json/api/v1/templates/1273/plans')
      .then((resp) => {
        this.setState({
          plans: resp.data
        });
      });
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
    if (this.state !== null) {
      const { showNotification } = this.state;

      if (Object.keys(this.state.plans).length > 0) {
        return [
          <div key="1">
            {showNotification && (
              <Notification
                header="Congratulations on your purchase"
                type="success"
              />
            )}
          </div>,
          <PriceTable
            templateId="1273"
            productId="0"
            plans={this.state.plans}
            onClick={this.onPurchase.bind(this)}
            key="2"
          />,
        ];
      }
    }

    return null;
  }
}
