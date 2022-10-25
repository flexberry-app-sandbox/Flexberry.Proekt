import {
  defineNamespace,
  Model as StorehouseMixin
} from '../mixins/regenerated/models/i-i-s-proekt-storehouse';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(StorehouseMixin, {
});

defineNamespace(Model);

export default Model;
