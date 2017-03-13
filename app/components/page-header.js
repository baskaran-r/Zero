import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    logout () {
      this.set('session.isLoggedIn', false);
      this.get('router').transitionTo('login');
    }
  }
});
