
export function initialize(application) {

  const inject = (property, what) => {
    application.inject('controller', property, what);
    application.inject('component', property, what);
    application.inject('route', property, what);
  };

  inject('config', 'service:config');
  inject('session', 'service:session');
  inject('authManager', 'service:auth-manager');
  inject('store', 'service:store');
  inject('metrics', 'service:metrics');
  inject('loader', 'service:loader');

  application.inject('component', 'router', 'service:-routing');
}

export default {
  name: 'blanket',
  initialize
};
