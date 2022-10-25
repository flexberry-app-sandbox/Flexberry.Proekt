import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import InvoiceStatusEnum from '../../../enums/i-i-s-proekt-invoice-status';

export let Model = Mixin.create({
  customerName: DS.attr('string'),
  note: DS.attr('string'),
  shipmentDateTime: DS.attr('date'),
  status: DS.attr('i-i-s-proekt-invoice-status', { defaultValue: InvoiceStatusEnum.New }),
  totalSum: DS.attr('decimal'),
  totalWeight: DS.attr('decimal'),
  employee: DS.belongsTo('i-i-s-proekt-employee', { inverse: null, async: false }),
  order: DS.belongsTo('i-i-s-proekt-order', { inverse: null, async: false }),
  invoiceItem: DS.hasMany('i-i-s-proekt-invoice-item', { inverse: 'invoice', async: false })
});

export let ValidationRules = {
  customerName: {
    descriptionKey: 'models.i-i-s-proekt-invoice.validations.customerName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  note: {
    descriptionKey: 'models.i-i-s-proekt-invoice.validations.note.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shipmentDateTime: {
    descriptionKey: 'models.i-i-s-proekt-invoice.validations.shipmentDateTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  status: {
    descriptionKey: 'models.i-i-s-proekt-invoice.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-proekt-invoice.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  totalWeight: {
    descriptionKey: 'models.i-i-s-proekt-invoice.validations.totalWeight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  employee: {
    descriptionKey: 'models.i-i-s-proekt-invoice.validations.employee.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  order: {
    descriptionKey: 'models.i-i-s-proekt-invoice.validations.order.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  invoiceItem: {
    descriptionKey: 'models.i-i-s-proekt-invoice.validations.invoiceItem.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-proekt-document'
  });
};
