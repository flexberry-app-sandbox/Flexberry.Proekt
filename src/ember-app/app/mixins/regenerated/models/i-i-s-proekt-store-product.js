import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  amount: DS.attr('number'),
  product: DS.belongsTo('i-i-s-proekt-product', { inverse: null, async: false }),
  storehouse: DS.belongsTo('i-i-s-proekt-storehouse', { inverse: 'storeProduct', async: false })
});

export let ValidationRules = {
  amount: {
    descriptionKey: 'models.i-i-s-proekt-store-product.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-proekt-store-product.validations.product.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  storehouse: {
    descriptionKey: 'models.i-i-s-proekt-store-product.validations.storehouse.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
