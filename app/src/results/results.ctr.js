define([
    'lodash'
], function (
    _
) {
    'use strict';

    function ResultsPageCtrl($scope, $state, SearchCriteriaService, LastSelectedItineraryService, searchStrategy) {
        $scope.searchStrategy = searchStrategy;

        $scope.newSearchCriteria = SearchCriteriaService.get();

        $scope.itinerarySelectedCallback = function (itin) {
            LastSelectedItineraryService.set(itin);

            $state.go('createReservation.optionalServices');
        };
        $scope.searchStartedCallback = function(searchCriteria) {
            $scope.searchCompletedSuccessful = undefined;
            $scope.searchInProgress = true;
            $scope.searchInProgressParams = {
                origin: searchCriteria.getFirstLeg().origin,
                destination: searchCriteria.getFirstLeg().destination
            };
        };
        $scope.searchCompletedSuccessCallback = function(itins, searchCriteria) {
            $scope.searchCompletedSuccessful = true;
            $scope.searchInProgress = false;
            $scope.lastSuccessfulSearchCriteria =  searchCriteria;
            $scope.latestLeadPrice = itins.getLeadPrice();
        };
        $scope.searchCompletedErrorCallback = function(errMessages, searchCriteria) {
            $scope.searchCompletedSuccessful = false;
            $scope.searchInProgress = false;
        }
    }
    return ResultsPageCtrl;
});
