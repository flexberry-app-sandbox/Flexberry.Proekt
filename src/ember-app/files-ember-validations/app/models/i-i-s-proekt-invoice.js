import {
  defineNamespace,
  defineBaseModel,
  Model as InvoiceMixin
} from '../mixins/regenerated/models/i-i-s-proekt-invoice';

import DocumentModel from './i-i-s-proekt-document';

let Model = DocumentModel.extend(InvoiceMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);

export default Model;
