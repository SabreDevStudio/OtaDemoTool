define([
    'angular',
    './InspirationalSearchPage.ctr',
    './InspirationalServices.ctrl',
    './inspirationalServices.rt',
    'SDSWidgets.lib'
], function (
    angular,
    InspirationalSearchPageCtrl,
    InspirationalServicesCtrl,
    InspirationalServicesRoutes,
    sabreDevStudioWidgets
) {
    'use strict';

    angular.module('otademoToolApp.resources.inspirationalServices', ['sdsWidgets.inspirationalWidgets', 'ui.router'])

        .controller('InspirationalSearchPageCtrl', [
            '$scope',
            '$state',
            'LastSearchCriteriaService',
            'SearchCriteriaSerializer',
            'PredefinedAirportClosestAirportService',
            InspirationalSearchPageCtrl
        ])
        .controller('LandingPageFlightsFromCtrl', [
            '$scope',
            '$state',
            'LastSearchCriteriaService',
            'SearchCriteriaSerializer',
            'QueryParamsClosestAirportService',
            InspirationalSearchPageCtrl
        ])
        .controller('InspirationalServicesCtrl', InspirationalServicesCtrl)
        .config(['$stateProvider', InspirationalServicesRoutes]);
});