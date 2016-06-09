define([], function () {
    'use strict';

    DefaultHomePageCtrl.$inject = ['$scope', 'LastSearchCriteriaService', 'ClipboardService'];
    function DefaultHomePageCtrl($scope, LastSearchCriteriaService, ClipboardService) {

        $scope.newSearchCriteriaCallback = function (searchCriteria) {
            LastSearchCriteriaService.set(searchCriteria);
            ClipboardService.add('searchCriteria', searchCriteria);
            //TODO and route to next state here, not in widget! Same for selected itin
        };
    }
    return DefaultHomePageCtrl;
});
