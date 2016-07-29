define([
    'angular',
    'inspirational/InspirationalSearchPage.ctr',
    'SDSWidgets.lib'
], function (
    angular,
    InspirationalSearchPageCtrl,
    sabreDevStudioWidgets
) {
    'use strict';

    angular.module('otademoToolApp.inspirationalSearch', ['sdsWidgets.inspirationalWidgets'])
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
        ]);
});