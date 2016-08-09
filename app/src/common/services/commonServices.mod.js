define([
    'angular',
    'ngStorage',
    'common/services/clipboard.srv',
    'common/services/clipboardLRU.srv',
    'common/services/lastSelectedItem.srv',
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
    ClipboardLRUServiceDecorator,
    LastSelectedItemService,
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
        .constant('maxItemsInClipboard', 10)
        .factory('ClipboardService', ClipboardService)
        .factory('ClipboardLRUServiceDecorator', [
            'ClipboardService',
            'maxItemsInClipboard',
            ClipboardLRUServiceDecorator
        ])
        .factory('LastSelectedItineraryService', LastSelectedItemService)
        .service('LastSearchCriteriaService', LastSearchCriteriaService)
        .service('InspirationalTravelDatesService', InspirationalTravelDatesService)
        .service('PersistenceLastSearchCriteriaService', [
            'LastSearchCriteriaService',
            'SearchCriteriaSerializer',
            'ClipboardLRUServiceDecorator',
            PersistenceLastSearchCriteriaService
        ])
        .service('PersistenceLastSelectedItineraryService', [
            'LastSelectedItineraryService',
            'ClipboardLRUServiceDecorator',
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