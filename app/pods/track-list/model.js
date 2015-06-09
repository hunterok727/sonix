import DS from 'ember-data';
import Ember from 'ember';

let TrackList = DS.Model.extend({
  title: DS.attr('string'),
  tracks: DS.hasMany('track'),

  persistentTracks: Ember.computed.filterBy('tracks', 'isNew', false)
});

export default TrackList;
