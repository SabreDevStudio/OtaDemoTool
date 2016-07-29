define([], function () {
    'use strict';

    DefaultHomePageCtrl.$inject = ['$scope', '$state', 'PersistenceLastSearchCriteriaService'];
    function DefaultHomePageCtrl($scope, $state, LastSearchCriteriaService) {

        $scope.newSearchCriteriaCallback = function (searchCriteria) {
            LastSearchCriteriaService.set(searchCriteria);
            $state.go('results');
        };
    }
    return DefaultHomePageCtrl;
});
