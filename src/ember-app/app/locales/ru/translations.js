import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },

  },

});

export default translations;
