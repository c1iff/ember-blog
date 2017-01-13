import Ember from 'ember';

export default Ember.Component.extend({
  articleFormTag: false,


  actions: {
    showArticleForm() {
      this.set('articleFormTag', true);
      console.log('articel show', this.articleFormTag);
    },
    saveArticle() {
     var params = {
       author: this.get('author'),
       body: this.get('body'),
       date: this.get('date'),
       excerpt: this.get('excerpt'),
       headline: this.get('headline'),
       photo: this.get('photo')
     };
     this.set('articleFormTag', false);
     this.sendAction('saveArticle', params);
   }
  }
});
