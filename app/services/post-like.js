import Service from '@ember/service';
import { A } from '@ember/array';

export default Service.extend({
    likedPost: null,

    init() {
        this._super(...arguments);
        this.set('likedPost', A([]));
    },

    getAll(){
        return this.likedPost;
    },

    add(post){
        this.likedPost.pushObject(post)
    },

    remove(post){
        this.likedPost.removeObject(post)
    },

    empty(){
        this.likedPost.clear();
    }
});
