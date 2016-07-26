define([
    'angular',
    'results/queryParamsSearchCriteria.srv',
    'results/results.ctr',
    'common/services/commonServices.mod',
    'SDSWidgets.lib'
], function (
    angular,
    QueryParamsSearchCriteriaSource,
    ResultsPageCtrl,
    commonServicesModule,
    sabreDevStudioWidgets
) {
    'use strict';

    angular.module('otademoToolApp.results', ['otademoToolApp.commonServices', 'sDSLookups'])
        .constant('searchStrategyForSearch', 'instaflights-updated-with-bfm')
        .constant('searchStrategyForLandingPage', 'first-instaflights-on-errors-bfm')
        .service('QueryParamsSearchCriteriaService', [
            'LastSearchCriteriaService',
            '$stateParams',
            'SearchCriteriaSerializer',
            'ClipboardService',
            QueryParamsSearchCriteriaSource
        ])
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
        ]);
});