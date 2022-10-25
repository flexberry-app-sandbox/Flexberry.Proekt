import { Serializer as OrderSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-order';
import DocumentSerializer from './i-i-s-proekt-document';

export default DocumentSerializer.extend(OrderSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
