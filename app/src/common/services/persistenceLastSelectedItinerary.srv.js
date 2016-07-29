define([
    'lodash'
    ], function (
    _
) {
  'use strict';

    function PersistenceLastSelectedItineraryService(delegate, ClipboardService) {
        return {
          get: function () {
            return delegate.get();
          },
          set: function (lastSelectedItinerary) {
              var itinJsonObj = angular.copy(lastSelectedItinerary); // doing angular.copy and not _.extend/merge, so that the $$hashKey property is not copied. $$hashKey property is added by ng-repeat (when there is not explicit track by) and it is (unique..) hash, different with every render. So from two views, based by same model we will get objects with different $$hashKey. We have to remove it so that later we do not have problems with equality comparisons (like when removing)
              ClipboardService.add('itinerary', itinJsonObj);
              delegate.set(lastSelectedItinerary);
          }
        };
    };

    return PersistenceLastSelectedItineraryService;
});
