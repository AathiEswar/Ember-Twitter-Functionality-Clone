import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    sortedPosts: computed('model.[]', function () {
        return this.model
            .slice()
            .sort((a, b) => b.profile.timeOfPost - a.profile.timeOfPost);
    })
});
