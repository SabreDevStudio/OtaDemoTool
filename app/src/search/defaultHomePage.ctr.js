define([], function () {
    'use strict';

    DefaultHomePageCtrl.$inject = ['$scope', '$state', 'LastSearchCriteriaService', 'ClipboardService', 'SearchCriteriaSerializer'];
    function DefaultHomePageCtrl($scope, $state, LastSearchCriteriaService, ClipboardService, SearchCriteriaSerializer) {

        $scope.newSearchCriteriaCallback = function (searchCriteria) {
            LastSearchCriteriaService.set(searchCriteria);
            var serializedSearchCriteria  = SearchCriteriaSerializer.serialize(searchCriteria);
            ClipboardService.addIfAbsent('searchCriteria', serializedSearchCriteria);
            $state.go('results');
        };
    }
    return DefaultHomePageCtrl;
});
