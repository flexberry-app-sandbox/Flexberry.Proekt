import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  description: DS.attr('string'),
  measure: DS.attr('string'),
  name: DS.attr('string'),
  price: DS.attr('decimal'),
  productCode: DS.attr('number', { defaultValue: 1 }),
  weight: DS.attr('decimal')
});

export let ValidationRules = {
  description: {
    descriptionKey: 'models.i-i-s-proekt-product.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  measure: {
    descriptionKey: 'models.i-i-s-proekt-product.validations.measure.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-proekt-product.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  price: {
    descriptionKey: 'models.i-i-s-proekt-product.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  productCode: {
    descriptionKey: 'models.i-i-s-proekt-product.validations.productCode.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  weight: {
    descriptionKey: 'models.i-i-s-proekt-product.validations.weight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};
