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
        }
    }
    return LandingPageFlightsToCtrl;
});
