import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel : true
    },
    limit: {
      refreshModel : true
    },
  },

  model (params) {
    var tl = null;
    return this.store.find('track-list', params.track_list_id).then((trackList) => {
      tl = trackList;
      let query = {
        trackList: trackList.id,
        page: params.page,
        limit: params.limit
      };
      console.log(trackList.tracks);
      return this.store.find('track', query);
    }).then(() => tl);
  }
});
