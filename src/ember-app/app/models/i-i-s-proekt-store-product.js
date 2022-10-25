import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as StoreProductMixin
} from '../mixins/regenerated/models/i-i-s-proekt-store-product';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(StoreProductMixin, Validations, {
});

export default Model;
