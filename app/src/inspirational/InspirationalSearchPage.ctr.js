define([
    'lodash'
], function (
    _
) {
    'use strict';

    InspirationalSearchPageCtrl.$inject = ['$scope', '$state', 'LastSearchCriteriaService', 'SearchCriteriaSerializer'];
    function InspirationalSearchPageCtrl($scope, $state, LastSearchCriteriaService, SearchCriteriaSerializer) {

        $scope.searchOfferClicked = function (simplifiedSearchCriteria) {
            var searchCriteria = SearchCriteriaSerializer.deserialize({
                origin: simplifiedSearchCriteria.origin,
                destination: simplifiedSearchCriteria.destination,
                outboundDepartureDateTime: simplifiedSearchCriteria.departureDateTime.format(),
                inboundDepartureDateTime: simplifiedSearchCriteria.returnDateTime.format()
            });
            LastSearchCriteriaService.set(searchCriteria);
            $state.go('results');
        }
    }
    return InspirationalSearchPageCtrl;
});
