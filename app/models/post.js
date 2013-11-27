import IndexableMixin from 'appkit/mixins/indexable';

var attr = DS.attr,
    Post;

Post = DS.Model.extend(IndexableMixin, {
  indexableKeys: ['title', 'description'],

  title: attr('string'),
  description: attr('string')
});

Post.reopenClass({
  FIXTURES: [{
    id: 1,
    title: "The Parley Letter",
    description: "My appearance on the Ruby Rogues podcast recently came up for discussion again on the private Parley mailing list. A long list of topics were raised and I took a time to ramble at large about all of them at once. Apologies for not taking the time to be more succinct, but at least each topic has a header so you can skip stuff you don't care about."
  }, {
    id: 2,
    title: "Rails is Omakase",
    description: "There are lots of à la carte software environments in this world. Places where in order to eat, you must first carefully look over the menu of options to order exactly what you want. I want this for my ORM, I want that for my template language, and let's finish it off with this routing library. Of course, you're going to have to know what you want, and you'll rarely have your horizon expanded if you always order the same thing, but there it is. It's a very popular way of consuming software."
  }]
});

export default Post;
