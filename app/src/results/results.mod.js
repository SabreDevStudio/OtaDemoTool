define([
    'angular',
    'results/results.ctr',
    'results/landingPageFlightsTo.ctr',
    'common/services/commonServices.mod',
    'SDSWidgets.lib'
], function (
    angular,
    ResultsPageCtrl,
    LandingPageFlightsToCtrl,
    commonServicesModule,
    sabreDevStudioWidgets
) {
    'use strict';

    angular.module('otademoToolApp.results', ['otademoToolApp.commonServices', 'sDSLookups'])
        .constant('searchStrategyForSearch', 'instaflights-updated-with-bfm')
        .constant('searchStrategyForLandingPage', 'first-instaflights-on-errors-bfm')
        .controller('ResultsPageCtrl', [
            '$scope',
            '$state',
            'LastSearchCriteriaService',
            'LastSelectedItineraryService',
            'ClipboardService',
            'searchStrategyForSearch',
            ResultsPageCtrl
        ])
        .controller('LandingPageCtrl', [
            '$scope',
            '$state',
            'QueryParamsSearchCriteriaService',
            'LastSelectedItineraryService',
            'ClipboardService',
            'searchStrategyForLandingPage',
            ResultsPageCtrl
        ])
        .controller('LandingPageFlightsToCtrl', [
            '$scope',
            '$state',
            '$stateParams',
            'SearchCriteriaSerializer',
            'LastSearchCriteriaService',
            LandingPageFlightsToCtrl
        ]);
});