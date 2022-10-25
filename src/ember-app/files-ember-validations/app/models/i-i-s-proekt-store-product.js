import {
  defineNamespace,
  Model as StoreProductMixin
} from '../mixins/regenerated/models/i-i-s-proekt-store-product';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(StoreProductMixin, {
});

defineNamespace(Model);

export default Model;
