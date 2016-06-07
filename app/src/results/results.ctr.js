define([], function () {
    'use strict';

    ResultsPageCtrl.$inject = ['$scope', 'LastSearchCriteriaService', 'LastSelectedItineraryService', 'ClipboardService'];
    function ResultsPageCtrl($scope, LastSearchCriteriaService, LastSelectedItineraryService, ClipboardService) {
        $scope.newSearchCriteria = LastSearchCriteriaService.get();
        $scope.itinerarySelectedCallback = function (itin) {
            LastSelectedItineraryService.set(itin);
            ClipboardService.add('itinerary', itin);
        };
        $scope.searchStartedCallback = function(searchCriteria) {
            $scope.searchInProgress = true;
            $scope.searchInProgressParams = {
                origin: searchCriteria.getFirstLeg().origin,
                destination: searchCriteria.getFirstLeg().destination
            };
        };
        $scope.searchCompletedSuccessCallback = function(itins) {
            $scope.searchInProgress = false;
        };
        $scope.searchCompletedErrorCallback = function(errMessages) {
            $scope.searchInProgress = false;
        }
    }
    return ResultsPageCtrl;
});
