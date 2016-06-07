define([
    'lodash'
    ], function (
    _
) {
  'use strict';

    function LastSelectedItineraryService() {
        var _lastSelectedItinerary;
        return {
          get: function () {
            return _lastSelectedItinerary;
          },
          set: function (lastSelectedItinerary) {
            _lastSelectedItinerary = lastSelectedItinerary;
          }
        };
    };

    return LastSelectedItineraryService;
});
