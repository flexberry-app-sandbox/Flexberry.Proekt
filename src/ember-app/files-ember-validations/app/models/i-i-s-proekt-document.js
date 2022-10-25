import {
  defineNamespace,
  Model as DocumentMixin
} from '../mixins/regenerated/models/i-i-s-proekt-document';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(DocumentMixin, {
});

defineNamespace(Model);

export default Model;
