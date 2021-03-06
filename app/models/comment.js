import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  article: DS.belongsTo('article', { async: true }),
});
