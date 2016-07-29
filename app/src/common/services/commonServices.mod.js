define([
    'angular',
    'ngStorage',
    'common/services/clipboard.srv',
    'common/services/lastSelectedItinerary.srv',
    'common/services/lastSearchCriteria.srv',
    'common/services/inspirationalTravelDates.srv',
    'common/services/queryParamsSearchCriteria.srv',
    'common/services/persistenceLastSearchCriteria.srv',
    'common/services/persistenceLastSelectedItinerary.srv',
    'common/services/predefinedAirportClosestAirportService.srv',
    'common/services/queryParamsClosestAirportService.srv'
], function (
    angular,
    ngStorage,
    ClipboardService,
    LastSelectedItineraryService,
    LastSearchCriteriaService,
    InspirationalTravelDatesService,
    QueryParamsSearchCriteriaSource,
    PersistenceLastSearchCriteriaService,
    PersistenceLastSelectedItineraryService,
    PredefinedAirportClosestAirportService,
    QueryParamsClosestAirportService
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
        ])
        .service('PredefinedAirportClosestAirportService', PredefinedAirportClosestAirportService)
        .service('QueryParamsClosestAirportService', [
            '$stateParams',
            QueryParamsClosestAirportService
        ]);
});