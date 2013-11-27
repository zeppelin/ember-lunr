/* global lunr */

export default Ember.Object.extend(Ember.Evented, {
  indexes: {},

  createIndex: function(type, structure) {
    this.indexes[type] = lunr(structure);
  },

  add: function(type, dataHash) {
    this.indexes[type].add(dataHash);
    this.trigger('didAddRecord', type, dataHash.id);
  },

  remove: function(type, id) {
    this.indexes[type].remove(id);
    this.trigger('didRemoveRecord', type, id);
  },

  search: function(type, string) {
    return this.indexes[type].search(string);
  }
});
