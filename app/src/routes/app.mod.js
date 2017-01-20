/*jshint unused: vars */
define([
    'angular',
    'angular-ui-router',
    'search/search.mod',
    'checkout/checkout.mod',
    'results/results.mod',
    'common/ui/clipboard/clipboard.mod',
    'inspirational/inspirational.mod',
    'templates.mod',
    'common/responsiveUtils/responsiveUtils.mod',
    'tours/tours.mod',
    'resources/resources.mod',
    'routes/flightSearch.rt',
    'routes/landingPages.rt',
    'routes/tours.rt',
    'routes/auxiliary.rt',
    'resources/resources.rt',
    'feedback/feedback.rt',
    'policies/policies.rt'
], function (
    angular,
    uiRouter,
    searchModule,
    checkoutModule,
    resultsModule,
    clipboardModule,
    inspirationalModule,
    templatesModule,
    responsiveUtilsModule,
    toursModule,
    resourcesModule,
    flightsSearchRoutes,
    landingPagesRoutes,
    toursRoutes,
    auxiliaryRoutes,
    resourcesRoutes,
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
            'otademoToolApp.inspirationalSearch',
            'otademoToolApp.tours',
            'otademoToolApp.resources',
            'ui.router',
            'sdsWidgets',
            'otademoToolApp.templates',
            'otademoToolApp.responsiveUtils',
            'RentAGuideWidgets'
        ])
        .config(['$stateProvider', flightsSearchRoutes])
        .config(['$stateProvider', landingPagesRoutes])
        .config(['$stateProvider', toursRoutes])
        .config(['$stateProvider', auxiliaryRoutes])
        .config(['$stateProvider', resourcesRoutes])
        .config(['$stateProvider', feedbackRoutes])
        .config(['$stateProvider', policiesRoutes])
        .config(['$urlRouterProvider', function ($urlRouterProvider) {
            $urlRouterProvider.otherwise('/demoHomePage');
        }])
});
