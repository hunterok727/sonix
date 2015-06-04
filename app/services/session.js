import Ember from 'ember';

export default Ember.Service.extend({
  attemptedTransition: null,
  username: null,
  isLoggedIn: Ember.computed.notEmpty('username')

});
