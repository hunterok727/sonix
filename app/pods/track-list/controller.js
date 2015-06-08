import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'limit'],
  page: 1,
  limit: 3,

  actions: {
    paging: function (params) {
      console.log(params);
    }
  }
});
