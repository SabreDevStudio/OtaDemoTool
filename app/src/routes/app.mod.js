/*jshint unused: vars */
define([
    'angular',
    'angular-ui-router',
    'angular-resource',
    'search/search.mod',
    'checkout/checkout.mod',
    'results/results.mod',
    'common/ui/clipboard/clipboard.mod',
    'templates.mod',
    'common/responsiveUtils/responsiveUtils.mod',
    'tours/tours.mod',
    'resources/resources.mod',
    'routes/flightSearch.rt',
    'routes/landingPages.rt',
    'routes/tours.rt',
    'routes/auxiliary.rt',
    'routes/index.rt',
    'demo/demo.rt',
    'feedback/feedback.rt',
    'policies/policies.rt'
], function (
    angular,
    uiRouter,
    ngResource,
    searchModule,
    checkoutModule,
    resultsModule,
    clipboardModule,
    templatesModule,
    responsiveUtilsModule,
    toursModule,
    resourcesModule,
    flightsSearchRoutes,
    landingPagesRoutes,
    toursRoutes,
    auxiliaryRoutes,
    indexRoutes,
    demoRoutes,
    feedbackRoutes,
    policiesRoutes
) {
    'use strict';

    return angular
        .module('otademoToolApp', [
            'otademoToolApp.search',
            'otademoToolApp.checkout',
            'otademoToolApp.clipboard',
            'otademoToolApp.results',
            'otademoToolApp.tours',
            'otademoToolApp.resources',
            'ui.router',
            'sdsWidgets',
            'otademoToolApp.templates',
            'otademoToolApp.responsiveUtils'
        ])
        .config(['$stateProvider', flightsSearchRoutes])
        .config(['$stateProvider', landingPagesRoutes])
        .config(['$stateProvider', toursRoutes])
        .config(['$stateProvider', auxiliaryRoutes])
        .config(['$stateProvider', indexRoutes])
        .config(['$stateProvider', demoRoutes])
        .config(['$stateProvider', feedbackRoutes])
        .config(['$stateProvider', policiesRoutes])
        .config(['$urlRouterProvider', function ($urlRouterProvider) {
            $urlRouterProvider.otherwise('/demoHomePage');
        }])
});
