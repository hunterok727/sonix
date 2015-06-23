import Ember from 'ember';

export default Ember.Route.extend({
  redirectTo: 'track-list',

  actions: {
    addTrack: function (form) {
      let trackList = this.modelFor('track-list');
      form.trackList = trackList;
      this.store.createRecord('track', form).save().then(() => {
        this.transitionTo('track-list');
      });
    },

    closeModal: function () {
      this.transitionTo(this.redirectTo);
    }
  }
});
