import Ember from "ember";

export default Ember.ObjectController.extend({
  reversedPosts: function () {
  },

  actions: {
    editPosts: function() {
      var title = this.get('title');

      var body = this.get('body');

        this.set('title', title);
        this.set('body', body);
        this.get('model').save().then(function(){
      this.transitionToRoute('posts');
      }.bind(this));
    },
  }
});
