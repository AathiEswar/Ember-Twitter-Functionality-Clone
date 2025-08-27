import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";

export default Route.extend({
    LikeService : service("post-like"),
    likedChats : null,
    async model(){
        console.log("posts:" , this.LikeService.likedPost)
        const allPost = await fetch('/api/liked-post' ,{
            method : "POST",
            body : JSON.stringify(this.LikeService.likedPost),
        })
        const resData = await allPost.json();
        console.log(resData);
        return resData
    }
});
