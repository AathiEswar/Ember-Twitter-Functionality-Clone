import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    LikeService : service("post-like"),

    isClicked : false,  
    init(){
        this._super(...arguments);
        const likedPost = this.LikeService.likedPost 
        if(likedPost.includes(this.id)){
            this.set("isClicked" , true)
        }
    },
    actions : {
        toggleClick(id){
            this.toggleProperty("isClicked")
            const clicked = this.get('isClicked');

            if(clicked){
                this.LikeService.add(id)
            }
            else{
                this.LikeService.remove(id);
            }
            console.log(this.LikeService.likedPost)
        }
    }
});
