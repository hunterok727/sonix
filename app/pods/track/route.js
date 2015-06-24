import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closeModal: function () {
      this.transitionTo('track-list', this.modelFor('track-list').id);
    }
  },

  model (params) {
    return this.store.find('track', params.track_id);
  }
});
