/*jshint unused: vars */
require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'angular-resource': '../../bower_components/angular-resource/angular-resource',
    'ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-touch': '../../bower_components/angular-touch/angular-touch',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    'sabre-dev-studio-widgets': '../../bower_components/sabre-dev-studio-widgets/dist/widgets/SDSWidgets.min',
    'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'ui-router': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'angular-touch': [
      'angular'
    ],
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'angular.mock'
    }
  },
  priority: [
    'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'ui-router',
  'angular-sanitize',
  'angular-resource',
  'angular-touch',
  'sabre-dev-studio-widgets'
], function(
    angular,
    app,
    uiRouter,
    ngSanitize,
    ngResource,
    ngTouch,
    sabreDevStudioWidgets
) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    //angular.bootstrap([app.name]);
    angular.resumeBootstrap([app.name]);
    var initInjector = angular.injector(["ng"]);
    var $timeout = initInjector.get("$timeout");
    $timeout(function () {
      sabreDevStudioWidgets.parseAllStylesheetsToMakeWidgetsResponsive()
    }, 10);
  });

});
