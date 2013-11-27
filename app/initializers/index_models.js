var post = function() {
  this.ref('id');
  this.field('title', { boost: 10 });
  this.field('description');
};

export default {
  name: 'indexModels',
  after: 'lunr',

  initialize: function(container, application) {
    var lunr = container.lookup('service:lunr');

    lunr.createIndex('post', post);
  }
};
