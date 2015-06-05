import Ember from 'ember';

export default Ember.Component.extend({
  username: null,

  prepare: function () {
    // is called after this Ember Object is created
    console.log('init');
  }.on('init'),

  setUp: function () {
    // `this.element` points to DOM node
    // this view occupies.
    // Exists only in Components
    console.log('setUp');
  }.on('didInsertElement'),

  actions: {
    login: function () {
      this.sendAction('onLogin', this.get('username'));
    }
  }
});
