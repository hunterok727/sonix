import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel : true
    },
    limit: {
      refreshModel : true
    }
  },

  model (params) {
    let query = {
      trackList: this.modelFor('track-list').id,
      page: params.page,
      limit: params.limit
    };
    return this.store.find('track', query);
  }
});
