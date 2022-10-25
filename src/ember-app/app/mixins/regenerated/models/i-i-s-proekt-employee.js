import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  middleName: DS.attr('string'),
  number: DS.attr('number', { defaultValue: 1 }),
  phoneNumber: DS.attr('string'),
  position: DS.attr('i-i-s-proekt-position-list')
});

export let ValidationRules = {
  email: {
    descriptionKey: 'models.i-i-s-proekt-employee.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  firstName: {
    descriptionKey: 'models.i-i-s-proekt-employee.validations.firstName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  lastName: {
    descriptionKey: 'models.i-i-s-proekt-employee.validations.lastName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  middleName: {
    descriptionKey: 'models.i-i-s-proekt-employee.validations.middleName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  number: {
    descriptionKey: 'models.i-i-s-proekt-employee.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  phoneNumber: {
    descriptionKey: 'models.i-i-s-proekt-employee.validations.phoneNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  position: {
    descriptionKey: 'models.i-i-s-proekt-employee.validations.position.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
