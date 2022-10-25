import {
  defineNamespace,
  Model as InvoiceItemMixin
} from '../mixins/regenerated/models/i-i-s-proekt-invoice-item';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(InvoiceItemMixin, {
});

defineNamespace(Model);

export default Model;
