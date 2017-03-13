import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    doLogin () {
      this.set('session.isLoggedIn', true);
      this.transitionTo('projects');
    }
  }
});
