define([], function () {
    'use strict';

    DefaultHomePageCtrl.$inject = ['$scope', 'LastSearchCriteriaService', 'ClipboardService', 'SearchCriteriaSerializer'];
    function DefaultHomePageCtrl($scope, LastSearchCriteriaService, ClipboardService, SearchCriteriaSerializer) {

        $scope.newSearchCriteriaCallback = function (searchCriteria) {
            LastSearchCriteriaService.set(searchCriteria);
            var serializedSearchCriteria  = SearchCriteriaSerializer.serialize(searchCriteria);
            if (!ClipboardService.contains('searchCriteria', serializedSearchCriteria)) {
                ClipboardService.add('searchCriteria', serializedSearchCriteria);
            }
            //TODO and route to next state here, not in widget! Same for selected itin
        };
    }
    return DefaultHomePageCtrl;
});
