import {
  defineNamespace,
  Model as ProductMixin
} from '../mixins/regenerated/models/i-i-s-proekt-product';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ProductMixin, {
});

defineNamespace(Model);

export default Model;
