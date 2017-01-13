import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);
  },
  actions: {

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var article = params.article;
      console.log('this is from save comment',article.get('comments'));
      article.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return article.save();
      });
      this.transitionTo('article', article);
    },

    deleteComment(comment){
      comment.destroyRecord();
      this.transitionTo('index')
    }
  }
});
