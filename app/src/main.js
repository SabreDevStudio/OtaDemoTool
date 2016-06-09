/*jshint unused: vars */
require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-touch': '../../bower_components/angular-touch/angular-touch',
    'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
    ngStorage: '../../bower_components/ngstorage/ngStorage',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    lodash: '../../bower_components/lodash/lodash',
    ngstorage: '../../bower_components/ngstorage/ngStorage',
    'SDSWidgets.lib': '../../bower_components/sabre-dev-studio-widgets/dist/widgets/SDSWidgets.lib.min',
    SDSWidgets: '../../bower_components/sabre-dev-studio-widgets/dist/widgets/SDSWidgets.min',
    text: '../../bower_components/text/text'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-ui-router': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    'angular-touch': [
      'angular'
    ],
    ngStorage: {
      deps: [
        'angular'
      ]
    },
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
//window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'workflows/basicFlow.rt',
  'angular-sanitize',
  'angular-touch',
  'SDSWidgets.lib'
], function(
    angular,
    otademoToolApp,
    ngSanitize,
    ngTouch,
    sabreDevStudioWidgets
) {
  'use strict';

  var html = angular.element(document.getElementsByTagName('html')[0]);
  angular.element().ready(function() {
    angular.bootstrap(html, ['otademoToolApp'], {
      strictDi: true
    });
  });

});
