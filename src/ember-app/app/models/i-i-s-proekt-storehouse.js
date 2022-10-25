import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as StorehouseMixin
} from '../mixins/regenerated/models/i-i-s-proekt-storehouse';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(StorehouseMixin, Validations, {
});

export default Model;
