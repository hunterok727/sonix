import Ember from 'ember';

export default Ember.Route.extend({
  redirectTo: 'track-list',
  model () {
    return this.store.createRecord('track');
  },

  validate () {
    let artistErrors = [];
    let artist = this.currentModel.get('artist');
    if (!artist) {
      artistErrors.push({
        message: 'Please fill the artist field'
      });
    } else if (artist[0] !== artist[0].toUpperCase()) {
      artistErrors.push({
        message: 'Please respect the artist'
      });
    }

    this.currentModel.set('errors.artist', artistErrors);
    return false;
  },

  actions: {
    addTrack: function (modal) {
      if (this.validate()) {
        let trackList = this.modelFor('track-list');
        this.currentModel.set('trackList', trackList);
        this.currentModel.save().then( () => {
          modal.hide();
          this.transitionTo(this.redirectTo);
        });
      }

      //this.store.createRecord('track', form).save().then(() => {
      //  this.transitionTo('track-list');
      //});
    },

    closeModal: function () {
      this.transitionTo(this.redirectTo);
    }
  }
});
