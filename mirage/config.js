export default function () {

  const posts = [
    {
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

  this.get("posts/:id" , (_ , request) =>{
    const id = request.params.id;
    return posts.objectAt(id);
  })
  
  this.post("/posts" , (_ , request) => {
    let data = JSON.parse(request.requestBody);
    posts.pushObject(data)
    return posts
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
