import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNew: function() {
      this.transitionTo('track/new');
    }
  }
});
