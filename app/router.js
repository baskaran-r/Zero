import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('auth', { path: '/'}, function() {
    this.route('dashboard', { path: '/', resetNamespace: true });
    this.route('projects', { resetNamespace: true }, function() {
      this.route('list', { path: '/' });
      this.route('project', {
        resetNamespace: true,
        path: '/:projectId'
      }, function() {
        this.route('home', { path: '/' });

        this.route('announcements');

        this.route('issues', () => {
          this.route('issue', {
            resetNamespace: true,
            path: '/issue/:issueId'
          });
        });
      });
    });
  });
  this.route('not-found', { path: "*path"});
});

export default Router;
