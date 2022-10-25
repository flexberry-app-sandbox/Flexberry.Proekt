import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  address: DS.attr('string'),
  number: DS.attr('number', { defaultValue: 1 }),
  employee: DS.belongsTo('i-i-s-proekt-employee', { inverse: null, async: false }),
  storeProduct: DS.hasMany('i-i-s-proekt-store-product', { inverse: 'storehouse', async: false })
});

export let ValidationRules = {
  address: {
    descriptionKey: 'models.i-i-s-proekt-storehouse.validations.address.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  number: {
    descriptionKey: 'models.i-i-s-proekt-storehouse.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  employee: {
    descriptionKey: 'models.i-i-s-proekt-storehouse.validations.employee.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  storeProduct: {
    descriptionKey: 'models.i-i-s-proekt-storehouse.validations.storeProduct.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};
