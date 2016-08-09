define([
    'lodash'
], function (
    _
) {
    'use strict';

    function TourListCtrl($scope, $state, LastToursSearchCriteriaService, LastSelectedTourService) {
        var newSearchCriteria = LastToursSearchCriteriaService.get();
        $scope.newSearchCriteriaLocationId = newSearchCriteria.selectedLocation.id;

        $scope.tourSelectedCallback = function (tour) {
            LastSelectedTourService.set(tour);
            $state.go('tourDetails');
        };

        $scope.searchStartedCallback = function(searchCriteria) {
            $scope.searchStatus = {
                searchInProgress: true,
                searchCompletedSuccessful: undefined
            };
        };
        $scope.searchSuccessCallback = function(tours, searchCriteria) {
            $scope.searchStatus.searchCompletedSuccessful = true;
        };
        $scope.searchErrorCallback = function(errMessages, searchCriteria) {
            $scope.searchStatus.searchCompletedSuccessful = false;
        };
        $scope.searchEnd = function () {
            $scope.searchStatus.searchInProgress = false;
        };
    }
    return TourListCtrl;
});
