import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal: function(modalName, model) {
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal',
        model: model
      });
    },
    closeModal: function () {
      console.log('Application close modal');
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
