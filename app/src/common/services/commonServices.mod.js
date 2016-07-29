define([
    'angular',
    'ngStorage',
    'common/services/clipboard.srv',
    'common/services/lastSelectedItinerary.srv',
    'common/services/lastSearchCriteria.srv',
    'common/services/inspirationalTravelDates.srv',
    'common/services/queryParamsSearchCriteria.srv',
    'common/services/persistenceLastSearchCriteria.srv',
    'common/services/persistenceLastSelectedItinerary.srv'
], function (
    angular,
    ngStorage,
    ClipboardService,
    LastSelectedItineraryService,
    LastSearchCriteriaService,
    InspirationalTravelDatesService,
    QueryParamsSearchCriteriaSource,
    PersistenceLastSearchCriteriaService,
    PersistenceLastSelectedItineraryService
) {
    'use strict';

    angular.module('otademoToolApp.commonServices', ['ngStorage'])
        .factory('ClipboardService', ClipboardService)
        .factory('LastSelectedItineraryService', LastSelectedItineraryService)
        .service('LastSearchCriteriaService', LastSearchCriteriaService)
        .service('InspirationalTravelDatesService', InspirationalTravelDatesService)
        .service('PersistenceLastSearchCriteriaService', [
            'LastSearchCriteriaService',
            'SearchCriteriaSerializer',
            'ClipboardService',
            PersistenceLastSearchCriteriaService
        ])
        .service('PersistenceLastSelectedItineraryService', [
            'LastSelectedItineraryService',
            'ClipboardService',
            PersistenceLastSelectedItineraryService
        ])
        .service('QueryParamsSearchCriteriaService', [
            'PersistenceLastSearchCriteriaService',
            '$stateParams',
            'SearchCriteriaSerializer',
            'InspirationalTravelDatesService',
            QueryParamsSearchCriteriaSource
        ]);
});