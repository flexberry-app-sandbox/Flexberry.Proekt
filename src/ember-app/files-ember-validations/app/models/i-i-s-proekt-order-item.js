import {
  defineNamespace,
  Model as OrderItemMixin
} from '../mixins/regenerated/models/i-i-s-proekt-order-item';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(OrderItemMixin, {
});

defineNamespace(Model);

export default Model;
