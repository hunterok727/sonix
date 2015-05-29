import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    //this.userSessionService.get('username');
    return this.store.find('track-list', params.track_list_id);
    //var tl = null;
    //return this.store.find('track-list', { raiting: 'positive' }).then((trackList) => {
    //  tl = trackList;
    //  return this.store.find('track', { trackList: trackList.id });
    //}).then((tracks) => {
    //  return tl;
    //});
    //var trackList = store.createRecord('track-list', {});
    //trackList.save();
  }

});
