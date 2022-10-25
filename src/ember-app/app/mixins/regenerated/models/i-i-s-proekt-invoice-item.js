import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  amount: DS.attr('number'),
  price: DS.attr('decimal'),
  totalSum: DS.attr('decimal'),
  weight: DS.attr('decimal'),
  product: DS.belongsTo('i-i-s-proekt-product', { inverse: null, async: false }),
  invoice: DS.belongsTo('i-i-s-proekt-invoice', { inverse: 'invoiceItem', async: false })
});

export let ValidationRules = {
  amount: {
    descriptionKey: 'models.i-i-s-proekt-invoice-item.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  price: {
    descriptionKey: 'models.i-i-s-proekt-invoice-item.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-proekt-invoice-item.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  weight: {
    descriptionKey: 'models.i-i-s-proekt-invoice-item.validations.weight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-proekt-invoice-item.validations.product.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  invoice: {
    descriptionKey: 'models.i-i-s-proekt-invoice-item.validations.invoice.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
