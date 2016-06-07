define([], function () {
    'use strict';

    DefaultHomePageCtrl.$inject = ['$scope', 'LastSearchCriteriaService', 'ClipboardService'];
    function DefaultHomePageCtrl($scope, LastSearchCriteriaService, ClipboardService) {
        $scope.lastSearchCriteria = {};
        $scope.$watch('lastSearchCriteria', function (newCriteria, oldCriteria) {
            if (angular.equals(newCriteria, oldCriteria)) {
                return;
            }
            LastSearchCriteriaService.set(newCriteria);
            ClipboardService.add('searchCriteria', newCriteria);
            //TODO and route to next state here, not in widget! Same for selected itin
        });
    }
    return DefaultHomePageCtrl;
});
