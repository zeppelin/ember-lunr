import LunrService from 'appkit/services/lunr';

export default {
  name: 'lunr',

  initialize: function(container, application) {
    container.optionsForType('service', { singleton: true });
    container.register('service:lunr', LunrService);

    container.injection('model', 'lunr', 'service:lunr');
    container.injection('controller', 'lunr', 'service:lunr');
  }
};
