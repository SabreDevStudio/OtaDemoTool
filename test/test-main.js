var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

    paths: {
    angular: '../../bower_components/angular/angular',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-touch': '../../bower_components/angular-touch/angular-touch',
    'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
    ngStorage: '../../bower_components/ngstorage/ngStorage',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    lodash: '../../bower_components/lodash/lodash',
    'SDSWidgets.lib': '../../bower_components/sabre-dev-studio-widgets/dist/widgets/SDSWidgets.lib.min',
    SDSWidgets: '../../bower_components/sabre-dev-studio-widgets/dist/widgets/SDSWidgets.min',
    text: '../../bower_components/text/text',
    ngstorage: '../../bower_components/ngstorage/ngStorage',
    almond: '../../bower_components/almond/almond'
  },

    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-sanitize': ['angular'],
        'angular-resource': ['angular'],
        'angular-touch': ['angular'],
        'angular-mocks': {
          deps:['angular'],
          'exports':'angular.mock'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
