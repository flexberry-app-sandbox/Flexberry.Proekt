import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  createDate: DS.attr('date', { defaultValue() { return new Date(); } }),
  number: DS.attr('number', { defaultValue: 1 })
});

export let ValidationRules = {
  createDate: {
    descriptionKey: 'models.i-i-s-proekt-document.validations.createDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  number: {
    descriptionKey: 'models.i-i-s-proekt-document.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
};
