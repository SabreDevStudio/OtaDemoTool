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
            $scope.searchStatus = {
                searchInProgress: true,
                searchCompletedSuccessful: undefined
            };
            $scope.searchParams = {
                origin: searchCriteria.getFirstLeg().origin,
                destination: searchCriteria.getFirstLeg().destination
            };
        };
        $scope.searchSuccessCallback = function(itins, searchCriteria) {
            $scope.searchStatus.searchCompletedSuccessful = true;
            $scope.lastSuccessfulSearchCriteria =  searchCriteria;
            $scope.latestLeadPrice = itins.getLeadPrice();
        };
        $scope.searchErrorCallback = function(errMessages, searchCriteria) {
            $scope.searchStatus.searchCompletedSuccessful = false;
        };

        $scope.searchEnd = function () {
            $scope.searchStatus.searchInProgress = false;
        };

        $scope.priceTrendsSearchCompleteSuccessful = function (searchResults, searchCriteria) {
            $scope.priceTrendsSearchCompletedSuccessful = true;
        }
    }
    return ResultsPageCtrl;
});
