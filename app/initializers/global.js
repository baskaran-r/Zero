export function initialize(application) {
   application.inject('component', 'router', 'router:main');
   application.inject('route', 'session', 'service:session');
   application.inject('template', 'session', 'service:session');
   application.inject('component', 'session', 'service:session');
}

export default {
  name: 'global',
  initialize
};
