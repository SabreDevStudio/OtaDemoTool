define([], function () {
    'use strict';

    function ToursResultPageCtrl($scope, $state, LastToursSearchCriteriaService) {
        var newSearchCriteria = LastToursSearchCriteriaService.get();
        $scope.newSearchCriteriaLocationId = newSearchCriteria.selectedLocation.id;
    }
    return ToursResultPageCtrl;
});
