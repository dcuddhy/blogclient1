import Ember from "ember";

export default Ember.ObjectController.extend({
  reversedPosts: function () {

  },

  actions: {
    delete: function(post) {
      post.destroyRecord();
      this.transitionToRoute('posts');
    }
  }

});
