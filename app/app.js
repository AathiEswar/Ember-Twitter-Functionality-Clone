import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
  engines = {
    'home-interface-engine' : {
      dependencies : {
        services : [
          "post-like"
        ]
      }
    }
  }
}

loadInitializers(App, config.modulePrefix);
