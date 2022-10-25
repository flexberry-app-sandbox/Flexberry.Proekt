import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  ValidationRules,
  Model as OrderMixin
} from '../mixins/regenerated/models/i-i-s-proekt-order';

import DocumentModel from './i-i-s-proekt-document';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-proekt-document';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = DocumentModel.extend(OrderMixin, Validations, {
});

defineBaseModel(Model);

export default Model;
