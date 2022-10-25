import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import OrderStatusEnum from '../../../enums/i-i-s-proekt-order-status';

export let Model = Mixin.create({
  paymentDate: DS.attr('date'),
  shipmentDate: DS.attr('date'),
  status: DS.attr('i-i-s-proekt-order-status', { defaultValue: OrderStatusEnum.New }),
  /**
    Non-stored property.

    @property totalSum
  */
  totalSum: DS.attr('decimal'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'totalSumCompute' method in model class (outside of this mixin) if you want to compute value of 'totalSum' property.

    @method _totalSumCompute
    @private
    @example
      ```javascript
      _totalSumChanged: on('init', observer('totalSum', function() {
        once(this, '_totalSumCompute');
      }))
      ```
  */
  _totalSumCompute: function() {
    let result = (this.totalSumCompute && typeof this.totalSumCompute === 'function') ? this.totalSumCompute() : null;
    this.set('totalSum', result);
  },
  employee: DS.belongsTo('i-i-s-proekt-employee', { inverse: null, async: false }),
  orderItem: DS.hasMany('i-i-s-proekt-order-item', { inverse: 'order', async: false })
});

export let ValidationRules = {
  paymentDate: {
    descriptionKey: 'models.i-i-s-proekt-order.validations.paymentDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  shipmentDate: {
    descriptionKey: 'models.i-i-s-proekt-order.validations.shipmentDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  status: {
    descriptionKey: 'models.i-i-s-proekt-order.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-proekt-order.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  employee: {
    descriptionKey: 'models.i-i-s-proekt-order.validations.employee.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  orderItem: {
    descriptionKey: 'models.i-i-s-proekt-order.validations.orderItem.__caption__',
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
