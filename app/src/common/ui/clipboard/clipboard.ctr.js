define([], function () {
    'use strict';

    ClipboardCtrl.$inject = ['$scope','ClipboardService', 'ItinerarySerializer', 'SearchCriteriaSerializer', '$state', 'LastSelectedItineraryService', 'LastSearchCriteriaService'];
    function ClipboardCtrl($scope, ClipboardService, ItinerarySerializer, SearchCriteriaSerializer, $state, LastSelectedItineraryService, LastSearchCriteriaService) {
         $scope.savedItineraries = fetchItineraries();
         $scope.savedSearchCriteria = ClipboardService.getAll('searchCriteria');
         $scope.savedCount = ClipboardService.size();

         $scope.removeItinerary = function (itinerary) {
             var comparator = function (element) {
                 return itinerary.equals(ItinerarySerializer.deserialize(element));
             };
             ClipboardService.remove('itinerary', itinerary, comparator);
             $scope.savedCount = ClipboardService.size();
             $scope.savedItineraries = fetchItineraries();
         };

        $scope.checkoutItinerary = function (itinerary) {
            LastSelectedItineraryService.set(itinerary);
            $state.go('createReservation.optionalServices');
        };

        $scope.removeAllItineraries = function () {
            ClipboardService.removeAll('itinerary');
            $scope.savedCount = ClipboardService.size();
            $scope.savedItineraries = fetchItineraries();
        };

        $scope.removeAllSearchCriteria = function () {
            ClipboardService.removeAll('searchCriteria');
            $scope.savedCount = ClipboardService.size();
            $scope.savedSearchCriteria = ClipboardService.getAll('searchCriteria');
        };

         $scope.removeSearchCriteria = function (searchCriteria) {
             ClipboardService.remove('searchCriteria', searchCriteria);
             $scope.savedCount = ClipboardService.size();
             $scope.savedSearchCriteria = ClipboardService.getAll('searchCriteria');
         };

        $scope.search = function (searchCriteriaJsonObj) {
            var searchCriteria = SearchCriteriaSerializer.deserialize(searchCriteriaJsonObj);
            LastSearchCriteriaService.set(searchCriteria);
            $state.go('results');
        };

        function fetchItineraries() {
            return ClipboardService.getAll('itinerary').map(function (itinJsonObj) {
                return ItinerarySerializer.deserialize(itinJsonObj);
            });
        }

    };

    return ClipboardCtrl;
});
