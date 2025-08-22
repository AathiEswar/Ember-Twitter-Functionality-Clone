import Component from '@ember/component';

export default Component.extend({
    isPostEditEnabled: true,
    actions: {
        handleEdit(postId) {
            this.toggleProperty("isPostEditEnabled")
            if (this.get("isPostEditEnabled")) {
                this.onPostEdit(postId , this.post.post.content);
            }
        }
    }
});
