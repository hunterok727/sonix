import Ember from 'ember';

export default Ember.Service.extend({
  username: null,
  isLoggedIn: Ember.computed.notEmpty('username')

});
