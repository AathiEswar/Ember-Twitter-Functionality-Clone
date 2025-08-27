export default function () {

  const posts = [
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
  ]

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.namespace = "/api";

  this.get("/posts", () => {
    return posts
  })

  this.get("posts/:id", (_, request) => {
    const id = JSON.parse(request.params.id);
    let chatPost = posts.find((post) => {
      return post.id === id
    });
    return chatPost;
  })

  this.post("/posts", (_, request) => {
    let data = JSON.parse(request.requestBody);
    posts.pushObject(data)
    return posts
  })

  this.post("/liked-post", (_, request) => {
    let likedPostIds = JSON.parse(request.requestBody); 
    console.log("likedPost", likedPostIds)
    let resArray = posts.filter(post => likedPostIds.includes(post.id));
    console.log("res array" , resArray)
    return resArray;
  })

  this.patch("/posts/:id", (_, request) => {
    const id = Number(request.params.id);
    let newAttrs = JSON.parse(request.requestBody);
    let post = posts.find((p) => p.id === id);
    if (post) {
      Object.assign(post.post, newAttrs);
      post.profile.timeOfPost = Date.now();

      return posts;
    } else {
      return { error: "Post not found" };
    }
  });

  this.delete("/posts/:id", (_, request) => {
    const id = Number(request.params.id);
    let index = posts.findIndex((p) => p.id === id);

    if (index !== -1) {
      posts.splice(index, 1);
      return posts;
    } else {
      return { error: "Post not found" };
    }
  })
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
