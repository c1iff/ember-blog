import Ember from 'ember';

export default Ember.Component.extend({

  updateFormTag: false,

  actions: {

    showUpdateForm() {
      this.set('updateFormTag', true)
      console.log('show update form', this.updateFormTag);
    },

    updateArticle(article) {
     var params = {
       author: this.get('author'),
       body: this.get('body'),
       date: this.get('date'),
       excerpt: this.get('excerpt'),
       headline: this.get('headline'),
       photo: this.get('photo')
     };
     this.set('updateFormTag', false);

     this.sendAction('update', article, params);
     console.log('sent the action');
   }
 }
});
