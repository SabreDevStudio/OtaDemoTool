define(['angular'], function (angular) {
  'use strict';

  angular.module('otademoToolApp.services.MessagingServices', [])
      .factory('LastSelectedItineraryService', function () {
        var _lastSelectedItinerary;
        return {
          get: function () {
            return _lastSelectedItinerary;
          },
          set: function (lastSelectedItinerary) {
            _lastSelectedItinerary = lastSelectedItinerary;
          }
        };
      });
});
