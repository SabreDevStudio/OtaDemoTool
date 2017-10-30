define([], function () {
    'use strict';

    DefaultHomePageCtrl.$inject = ['$scope', '$state', 'PersistenceLastSearchCriteriaService', '$localStorage'];
    function DefaultHomePageCtrl($scope, $state, LastSearchCriteriaService, $localStorage) {

        $scope.originAirportCode = $localStorage.$default({origin: "FRA"}).origin;

        $scope.newSearchCriteriaCallback = function (searchCriteria) {
            LastSearchCriteriaService.set(searchCriteria);
            $state.go('results');
        };
    }
    return DefaultHomePageCtrl;
});
