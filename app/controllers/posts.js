export default Ember.ArrayController.extend({
  searchString: '',

  filteredContent: function() {
    var searchString = this.get('searchString'),
        results, resultIndex, result, len, i;

    if (Ember.isEmpty(searchString)) {
      return this.get('model');
    }

    results = this.lunr.search('post', searchString);
    resultIndex = {};

    for (i=0,len=results.length; i<len; i++) {
      result = results[i];
      resultIndex[result.ref] = result.score;
    }

    return this.store.filter('post', function(post) {
      if (resultIndex[post.id]) {
        return true;
      }
    });
  }.property(),

  updateFilteredContent: function() {
    Ember.run.once(function() {
      this.propertyDidChange('filteredContent');
    }.bind(this));
  }.observes('@each.title', '@each.description', 'searchString').on('init'),

  setupLunrObserver: function() {
    this.lunr.on('didAddRecord', this, this.updateFilteredContent);
    this.lunr.on('didRemoveRecord', this, this.updateFilteredContent);
  }.on('init')
});
