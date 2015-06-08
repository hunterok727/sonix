import DS from 'ember-data';
import Ember from 'ember';

let TrackList = DS.Model.extend({
  title: DS.attr('string'),
  tracks: DS.hasMany('track', { async: true }),

  persistentTracks: Ember.computed.filterBy('tracks', 'isSaving', false)
});

export default TrackList;
