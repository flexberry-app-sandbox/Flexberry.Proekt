import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProektDocumentModel from './models/i-i-s-proekt-document';
import IISProektEmployeeModel from './models/i-i-s-proekt-employee';
import IISProektInvoiceItemModel from './models/i-i-s-proekt-invoice-item';
import IISProektInvoiceModel from './models/i-i-s-proekt-invoice';
import IISProektOrderItemModel from './models/i-i-s-proekt-order-item';
import IISProektOrderModel from './models/i-i-s-proekt-order';
import IISProektProductModel from './models/i-i-s-proekt-product';
import IISProektStoreProductModel from './models/i-i-s-proekt-store-product';
import IISProektStorehouseModel from './models/i-i-s-proekt-storehouse';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt-document': IISProektDocumentModel,
    'i-i-s-proekt-employee': IISProektEmployeeModel,
    'i-i-s-proekt-invoice-item': IISProektInvoiceItemModel,
    'i-i-s-proekt-invoice': IISProektInvoiceModel,
    'i-i-s-proekt-order-item': IISProektOrderItemModel,
    'i-i-s-proekt-order': IISProektOrderModel,
    'i-i-s-proekt-product': IISProektProductModel,
    'i-i-s-proekt-store-product': IISProektStoreProductModel,
    'i-i-s-proekt-storehouse': IISProektStorehouseModel
  },

  'application-name': '',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },

  },

});

export default translations;
