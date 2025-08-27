import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    isPostEditEnabled: true,
    initialValue: '',
    maxCharCount: 40,
    charCount: 0,

    didReceiveAttrs() {
        this._super(...arguments);
        this.set("initialValue", this.post.post.content);
        this.set("charCount", this.post.post.content?.length || 0);
    },

    remaining: computed('charCount', function () {
        return this.maxCharCount - this.charCount;
    }),

    strokeOffset: computed('charCount', function () {
        let r = 18;
        let circ = 2 * Math.PI * r;
        let progress = Math.min(this.charCount / this.maxCharCount, 1);
        return circ - progress * circ;
    }),

    actions: {
        handleEdit(postId) {
            this.toggleProperty("isPostEditEnabled");
            if (this.get("isPostEditEnabled")) {
                if (this.initialValue !== this.post.post.content) {
                    this.onPostEdit(postId, this.post.post.content);
                }
            }
        },

        handleInput(event) {
            this.set("charCount", event.target.value.length);
        }
    }
});
