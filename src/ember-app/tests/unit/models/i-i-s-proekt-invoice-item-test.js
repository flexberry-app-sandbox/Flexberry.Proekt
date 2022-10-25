import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-invoice-item', 'Unit | Model | i-i-s-proekt-invoice-item', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
