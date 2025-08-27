import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | post-like', function(hooks) {
  setupTest(hooks);

  test('service exists and initializes with an empty list', function(assert) {
    let service = this.owner.lookup('service:post-like');

    assert.ok(service, 'service is instantiated');
    assert.deepEqual(service.getAll(), [], 'starts empty');
  });

  test('add() appends posts to liked list', function(assert) {
    let service = this.owner.lookup('service:post-like');

    service.add(1);
    assert.deepEqual(service.getAll(), [1], 'contains the added id');

    service.add(2);
    assert.deepEqual(service.getAll(), [1, 2], 'preserves order on multiple adds');
  });

  test('remove() removes a specific post id', function(assert) {
    let service = this.owner.lookup('service:post-like');

    service.add(1);
    service.add(2);
    service.add(3);

    service.remove(2);
    assert.deepEqual(service.getAll(), [1, 3], 'removes only the specified id');

    service.remove(999);
    assert.deepEqual(service.getAll(), [1, 3], 'removing a non-existent id is a no-op');
  });

  test('empty() clears all liked posts', function(assert) {
    let service = this.owner.lookup('service:post-like');

    service.add(10);
    service.add(20);
    assert.deepEqual(service.getAll(), [10, 20], 'sanity check before clearing');

    service.empty();
    assert.deepEqual(service.getAll(), [], 'all entries cleared');
  });
});
