import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import OrderStatusEnum from '../enums/i-i-s-proekt-order-status';

export default FlexberryEnum.extend({
  enum: OrderStatusEnum,
  sourceType: 'IIS.Proekt.OrderStatus'
});
