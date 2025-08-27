import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index', function(hooks) {
  setupTest(hooks);

  test('Returns Home Page', function(assert) {
    let route = this.owner.lookup('route:index');
    let model = route.model();
    assert.equal(model, "Home Page");
  });
});
