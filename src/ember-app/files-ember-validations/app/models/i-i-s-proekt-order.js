import {
  defineNamespace,
  defineBaseModel,
  Model as OrderMixin
} from '../mixins/regenerated/models/i-i-s-proekt-order';

import DocumentModel from './i-i-s-proekt-document';

let Model = DocumentModel.extend(OrderMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);

export default Model;
