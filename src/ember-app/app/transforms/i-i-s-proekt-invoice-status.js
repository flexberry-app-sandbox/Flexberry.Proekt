import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import InvoiceStatusEnum from '../enums/i-i-s-proekt-invoice-status';

export default FlexberryEnum.extend({
  enum: InvoiceStatusEnum,
  sourceType: 'IIS.Proekt.InvoiceStatus'
});
