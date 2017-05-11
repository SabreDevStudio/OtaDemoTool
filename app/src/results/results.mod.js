define([
    'angular',
    'results/results.ctr',
    'results/landingPageFlightsTo.ctr',
    'common/services/commonServices.mod',
    'common/widgets/searchStatus/searchStatus.mod',
    'SDSWidgets.lib'
], function (
    angular,
    ResultsPageCtrl,
    LandingPageFlightsToCtrl,
    commonServicesModule,
    sabreDevStudioWidgets,
    searchStatusModule
) {
    'use strict';

    angular.module('otademoToolApp.results', [
        'otademoToolApp.commonServices',
        'otademoToolApp.widgets.searchStatus',
        'sDSLookups'
    ])
        .constant('searchStrategyForSearch', 'instaflights-updated-with-bfm')
        .constant('searchStrategyForLandingPage', 'first-instaflights-on-errors-bfm')
        .controller('ResultsPageCtrl', [
            '$scope',
            '$state',
            'LastSearchCriteriaService',
            'PersistenceLastSelectedItineraryService',
            'searchStrategyForSearch',
            ResultsPageCtrl
        ])
        .controller('LandingPageCtrl', [
            '$scope',
            '$state',
            'QueryParamsSearchCriteriaService',
            'PersistenceLastSelectedItineraryService',
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