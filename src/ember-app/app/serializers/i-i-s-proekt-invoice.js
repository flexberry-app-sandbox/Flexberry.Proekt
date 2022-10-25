import { Serializer as InvoiceSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-invoice';
import DocumentSerializer from './i-i-s-proekt-document';

export default DocumentSerializer.extend(InvoiceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
