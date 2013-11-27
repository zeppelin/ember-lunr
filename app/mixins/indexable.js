export default Ember.Mixin.create({
  concatenatedProperties: ['indexableKeys'],
  indexableKeys: ['id'],

  indexRecord: function() {
    var type = this.constructor.typeKey,
        indexableKeys = this.get('indexableKeys'),
        data = this.getProperties.apply(this, indexableKeys);

    this.lunr.add(type, data);
  }.on('didLoad'),

  removeFromIndex: function() {
    var type = this.constructor.typeKey,
        id = this.get('id');

    this.lunr.remove(type, id);
  }.on('willDestroy')
});
