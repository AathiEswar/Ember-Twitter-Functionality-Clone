import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('chat');
  this.route('post-id', { path: 'chat/:id' });
  this.route('liked-chats');
  this.mount('home-interface-engine', { as: 'home', path: '/home' });
});
