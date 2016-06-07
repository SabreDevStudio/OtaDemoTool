define([
    'angular',
    'ngStorage',
    'common/services/clipboard.srv',
    'common/services/lastSelectedItinerary.srv'
], function (
    angular,
    ngStorage,
    ClipboardService,
    LastSelectedItineraryService
) {
    'use strict';

    angular.module('otademoToolApp.commonServices', ['ngStorage'])
        .factory('ClipboardService', ClipboardService)
        .factory('LastSelectedItineraryService', LastSelectedItineraryService);
});