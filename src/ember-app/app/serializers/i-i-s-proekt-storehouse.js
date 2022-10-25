import { Serializer as StorehouseSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-storehouse';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(StorehouseSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});