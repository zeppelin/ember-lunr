/* global lunr */

export default Ember.Object.extend({
  indexes: {},

  createIndex: function(type, structure) {
    this.indexes[type] = lunr(structure);
  },

  add: function(type, dataHash) {
    this.indexes[type].add(dataHash);
  },

  remove: function(type, id) {
    this.indexes[type].remove(id);
  },

  search: function(type, string) {
    return this.indexes[type].search(string);
  }
});
