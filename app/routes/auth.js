import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    if (!this.get('session').isLoggedIn) {
      //this.transitionTo('login');
    }
  }
});
