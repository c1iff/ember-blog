import Ember from 'ember';

export default Ember.Route.extend({
  articleFormTag: true,

  model() {
    return this.store.findAll('article');
  },

  actions: {
    showArticleForm() {
      this.set('articleFormTag', true);
      console.log('articel show', this.articleFormTag);
    },
    saveArticle(params) {
      var newRental = this.store.createRecord('article', params);
      newRental.save();
      this.transitionTo('admin');
   },
   update(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          article.set(key,params[key]);
        }
      });
      article.save();
      this.transitionTo('admin');
    }
  }
});
