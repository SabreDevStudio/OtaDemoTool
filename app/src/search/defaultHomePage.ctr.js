define([], function () {
    'use strict';

    DefaultHomePageCtrl.$inject = ['$scope', 'LastSearchCriteriaService', 'ClipboardService'];
    function DefaultHomePageCtrl($scope, LastSearchCriteriaService, ClipboardService) {

        $scope.newSearchCriteriaCallback = function (searchCriteria) {
            LastSearchCriteriaService.set(searchCriteria);
            var simplifiedSearchCriteria  = {
                origin: searchCriteria.getFirstLeg().origin,
                destination: searchCriteria.getFirstLeg().destination,
                outboundDepartureDateTime: searchCriteria.getFirstLeg().departureDateTime.format(),
                inboundDepartureDateTime: searchCriteria.getSecondLeg().departureDateTime.format(),
                totalPassengerCount: searchCriteria.getTotalPassengerCount(),
                preferredCabin: searchCriteria.preferredCabin.name,
                preferredAirlines: searchCriteria.getPreferredAirlines()
            };
            if (!ClipboardService.contains('searchCriteria', simplifiedSearchCriteria)) {
                ClipboardService.add('searchCriteria', simplifiedSearchCriteria);
            }
            //TODO and route to next state here, not in widget! Same for selected itin
        };
    }
    return DefaultHomePageCtrl;
});
