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
        }
    }
    return InspirationalSearchPageCtrl;
});
