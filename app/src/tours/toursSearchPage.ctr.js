define([], function () {
    'use strict';

    function ToursSearchPageCtrl($scope, $state, LastToursSearchCriteriaService) {

        $scope.newSearchCriteriaCallback = function (searchCriteria) {
            LastToursSearchCriteriaService.set(searchCriteria);
            $state.go('tourList');
        };
    }
    return ToursSearchPageCtrl;
});
