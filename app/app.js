import Resolver from 'resolver';
import lunr from 'appkit/initializers/lunr';
import indexModels from 'appkit/initializers/index_models';

Ember.MODEL_FACTORY_INJECTIONS = true;

Ember.Application.initializer(lunr);
Ember.Application.initializer(indexModels);

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver['default']
});

Ember.RSVP.configure('onerror', function(error) {
  // ensure unhandled promises raise awareness.
  // may result in false negatives, but visibility is more important
  if (error instanceof Error) {
    Ember.Logger.assert(false, error);
    Ember.Logger.error(error.stack);
  }
});

export default App;
