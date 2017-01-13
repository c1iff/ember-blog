import Ember from 'ember';

export default Ember.Component.extend({
  addCommentTag: false,

  actions: {

    showCommentForm() {
      this.set('addCommentTag', true)
    },

    saveComment() {
     var params = {
       author: this.get('author'),
       content: this.get('content'),
       date: this.get('date'),
       article: this.get('article')
     };

     this.set('addCommentTag', false);

     this.sendAction('saveComment', params);
   }
 }
});
