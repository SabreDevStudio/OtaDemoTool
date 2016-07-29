define([
    'lodash'
], function (
    _
) {
    'use strict';

    function LandingPageFlightsToCtrl($scope, $state, $stateParams, SearchCriteriaSerializer, LastSearchCriteriaService) {
        $scope.destination = $stateParams.destination;

        $scope.offerClicked = function (simplifiedSearchCriteria) {
            var searchCriteria = SearchCriteriaSerializer.deserialize({
                origin: simplifiedSearchCriteria.origin,
                destination: simplifiedSearchCriteria.destination,
                outboundDepartureDateTime: simplifiedSearchCriteria.departureDateTime,
                inboundDepartureDateTime: simplifiedSearchCriteria.returnDateTime
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
                destination: searchCriteria.destination
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
    return LandingPageFlightsToCtrl;
});
