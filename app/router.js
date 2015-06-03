import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('track-list', { path: ':track_list_id'}, function() {
    this.resource('track/new');
    this.resource('track', { path: ':track_id' }, function() {

    });
  });
});

export default Router;
