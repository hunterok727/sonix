import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closeModal: function () {
      console.log('Close');
      window.history.back();
    }
  }
});
