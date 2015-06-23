import Ember from 'ember';

export default Ember.Component.extend({
  title: null,
  onClose: null,
  classNames: ['modal', 'fade'],

  didInsertElement: function() {
    this.$().modal()
      .on('hidden.bs.modal', () => {
        this.sendAction('close');
      });
  },
  hide: function() {
    this.$().modal('hide');
  },

  actions: {
    closeMe () {
      this.sendAction('onClose');
    }
  }
});
