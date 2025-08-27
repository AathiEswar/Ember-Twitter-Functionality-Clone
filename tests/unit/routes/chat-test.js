import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | chat', function (hooks) {
  setupTest(hooks);

  test('returns post', async function (assert) {
    let route = this.owner.lookup('route:chat');

    let data = [
      {
        id: 1,
        profile: {
          username: "Devon",
          mail: "@devonLee",
          timeOfPost: "1692615600000"
        },
        post: {
          content: "Mom! I am on Twitter!"
        }
      },
      {
        id: 2,
        profile: {
          username: "Howard",
          mail: "@howardhue",
          timeOfPost: "1699615900000"
        },
        post: {
          content: "I fight my demons and win XD"
        }
      }
    ];

    window.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve(data)
      });

    const modelData = await route.model();
    assert.deepEqual(modelData, data, 'Route.model returns the expected posts');
  });

});
