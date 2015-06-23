import Ember from 'ember';

export default Ember.Component.extend({
  title: null,
  onClose: null,
  classNames: ['modal', 'fade'],

  didInsertElement: function() {
    this.$().modal()
      .on('hidden.bs.modal', () => {
        this.sendAction('onClose');
      });
  },
  hide: function() {
    this.$().modal('hide');
  }
});
