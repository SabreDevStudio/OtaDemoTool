define([
    'angular',
    'ngStorage',
    'common/services/clipboard.srv',
    'common/services/lastSelectedItinerary.srv',
    'common/services/lastSearchCriteria.srv',
    'common/services/inspirationalTravelDates.srv',
    'common/services/queryParamsSearchCriteria.srv'
], function (
    angular,
    ngStorage,
    ClipboardService,
    LastSelectedItineraryService,
    LastSearchCriteriaService,
    InspirationalTravelDatesService,
    QueryParamsSearchCriteriaSource
) {
    'use strict';

    angular.module('otademoToolApp.commonServices', ['ngStorage'])
        .factory('ClipboardService', ClipboardService)
        .factory('LastSelectedItineraryService', LastSelectedItineraryService)
        .service('LastSearchCriteriaService', LastSearchCriteriaService)
        .service('InspirationalTravelDatesService', InspirationalTravelDatesService)
        .service('QueryParamsSearchCriteriaService', [
            'LastSearchCriteriaService',
            '$stateParams',
            'SearchCriteriaSerializer',
            'ClipboardService',
            'InspirationalTravelDatesService',
            QueryParamsSearchCriteriaSource
        ]);
});