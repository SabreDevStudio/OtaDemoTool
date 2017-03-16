/*jshint unused: vars */
require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-touch': '../../bower_components/angular-touch/angular-touch',
    'angular-ui-router': '../../node_modules/angular-ui-router/release/angular-ui-router',
    ngStorage: '../../bower_components/ngstorage/ngStorage',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    lodash: '../../bower_components/lodash/lodash',
    'SDSWidgets.lib': '../../bower_components/sabre-dev-studio-widgets/dist/widgets/SDSWidgets.lib.min',
    text: '../../bower_components/text/text',
    ngstorage: '../../bower_components/ngstorage/ngStorage',
    almond: '../../bower_components/almond/almond',
    SDSWidgets: '../../bower_components/sabre-dev-studio-widgets/dist/widgets/SDSWidgets.min',
    RentAGuideWidgets: '../../bower_components/RentAGuideWidgets/dist/RentAGuideWidgets'
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
    RentAGuideWidgets: {
      deps: [
        'angular'
      ]
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
  'routes/app.mod',
  'angular-sanitize',
  'angular-touch',
  'SDSWidgets.lib',
  'RentAGuideWidgets'
], function(
    angular,
    otademoToolApp,
    ngSanitize,
    ngTouch,
    sabreDevStudioWidgets,
    RentAGuideWidgets
) {
  'use strict';

  var html = angular.element(document.getElementsByTagName('html')[0]);
  angular.element().ready(function() {
    angular.bootstrap(html, ['otademoToolApp'], {
      strictDi: true
    });
  });

});
