/*jshint unused: vars */
define([
        'angular',
        'controllers/main',
        'controllers/createreservation',
        'controllers/searchControllers']/*deps*/
    , function (
        angular,
        MainCtrl,
        CreateReservationCtrl,
        searchControllers)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name otademoToolApp
   * @description
   * # otademoToolApp
   *
   * Main module of the application.
   */
  return angular
    .module('otademoToolApp', ['otademoToolApp.controllers.MainCtrl',
    'otademoToolApp.controllers.CreateReservationCtrl',
    'otademoToolApp.controllers.SearchControllers',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngTouch',
    'sdsWidgets'
  ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('defaultHomePage', {
            url: '/defaultHomePage',
            templateUrl: 'views/defaultHomePage.html',
            controller: 'DefaultHomePageCtrl'
        }
        )
        .state('results', {
                url: '/results',
                templateUrl: 'views/results.html',
                controller: 'ResultsPageCtrl'
            }
        )
        .state('createReservation', {
              url: '/createReservation',
              templateUrl: 'views/createReservation/index.html',
              controller: 'CreateReservationCtrl',
              controllerAs: 'ctrl'
            }
        )
        // nested states for create reservation form
        .state('createReservation.itineraryDisplay', {
              url: '/itineraryDisplay',
              templateUrl: 'views/createReservation/itineraryDisplay.html'
            }
        )
        .state('createReservation.travellerDataInput', {
              url: '/travellerDataInput',
              templateUrl: 'views/createReservation/travellerDataInput.html'
            }
        )
        .state('createReservation.paymentDetailsInput', {
              url: '/paymentDetailsInput',
              templateUrl: 'views/createReservation/paymentDetailsInput.html'
            }
        );

        $urlRouterProvider.otherwise('/defaultHomePage');
    }]);
});
