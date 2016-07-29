define([
    'lodash'
], function (
    _
) {
    'use strict';

    function InspirationalSearchPageCtrl($scope, $state, LastSearchCriteriaService, SearchCriteriaSerializer, ClosestAirportService) {

        $scope.closestAirport = ClosestAirportService.get();

        $scope.searchOfferClicked = function (simplifiedSearchCriteria) {
            var searchCriteria = SearchCriteriaSerializer.deserialize({
                origin: simplifiedSearchCriteria.origin,
                destination: simplifiedSearchCriteria.destination,
                outboundDepartureDateTime: simplifiedSearchCriteria.departureDateTime.toISOString(),
                inboundDepartureDateTime: simplifiedSearchCriteria.returnDateTime.toISOString()
            });
            LastSearchCriteriaService.set(searchCriteria);
            $state.go('results');
        };

        $scope.searchStartedCallback = function(searchCriteria) {
            $scope.searchStatus = {
                searchInProgress: true,
                searchCompletedSuccessful: undefined
            };
            $scope.searchParams = {
                origin: searchCriteria.origin
            };
        };
        $scope.searchCompletedSuccessCallback = function() {
            $scope.searchStatus.searchInProgress = false;
            $scope.searchStatus.searchCompletedSuccessful = true;
        };
        $scope.searchCompletedErrorCallback = function() {
            $scope.searchStatus.searchCompletedSuccessful = false;
            $scope.searchStatus.searchInProgress = false;
        };
    }
    return InspirationalSearchPageCtrl;
});
