import {
  defineNamespace,
  Model as EmployeeMixin
} from '../mixins/regenerated/models/i-i-s-proekt-employee';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(EmployeeMixin, {
});

defineNamespace(Model);

export default Model;
