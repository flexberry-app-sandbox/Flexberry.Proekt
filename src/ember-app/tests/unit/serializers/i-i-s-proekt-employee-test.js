import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-employee', 'Unit | Serializer | i-i-s-proekt-employee', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proekt-employee',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proekt-invoice-status',
    'transform:i-i-s-proekt-order-status',
    'transform:i-i-s-proekt-position-list',

    'model:i-i-s-proekt-document',
    'model:i-i-s-proekt-employee',
    'model:i-i-s-proekt-invoice-item',
    'model:i-i-s-proekt-invoice',
    'model:i-i-s-proekt-order-item',
    'model:i-i-s-proekt-order',
    'model:i-i-s-proekt-product',
    'model:i-i-s-proekt-store-product',
    'model:i-i-s-proekt-storehouse',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
