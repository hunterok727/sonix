import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'limit'],
  page: 1,
  limit: 3,

  actions: {
    goPage: function (page) {
      this.set('page', page);
    }
  }
});
