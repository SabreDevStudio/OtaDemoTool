define([], function () {
    'use strict';

    ClipboardCtrl.$inject = ['$scope','ClipboardService'];
    function ClipboardCtrl($scope, ClipboardService) {
         $scope.savedItineraries = ClipboardService.getAll('itinerary');
         $scope.savedSearchCriteria = ClipboardService.getAll('searchCriteria');
         $scope.savedCount = ClipboardService.size();

         $scope.removeItinerary = function (itinerary) {
             ClipboardService.remove('itinerary', itinerary);
         };
         $scope.removeSearchCriteria = function (searchCriteria) {
             ClipboardService.remove('searchCriteria', searchCriteria);
         };
    };
    return ClipboardCtrl;
});
