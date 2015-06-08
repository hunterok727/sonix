import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('track-list', { path: ':track_list_id'}, function() {
    this.route('paging', { path: 'page/:page/limit/:limit' });
    this.resource('track/new');
    this.resource('track', { path: ':track_id' }, function() {

    });
  });
  this.route('login');
});

export default Router;
