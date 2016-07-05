define([
    'lodash'
], function (
    _
) {
    'use strict';

    ResultsPageCtrl.$inject = ['$scope', '$state', 'LastSearchCriteriaService', 'LastSelectedItineraryService', 'ClipboardService'];
    function ResultsPageCtrl($scope, $state, LastSearchCriteriaService, LastSelectedItineraryService, ClipboardService) {
        $scope.newSearchCriteria = LastSearchCriteriaService.get();

        $scope.itinerarySelectedCallback = function (itin) {
            LastSelectedItineraryService.set(itin);
            var itinJsonObj = angular.copy(itin); // doing angular.copy and not _.extend/merge, so that the $$hashKey property is not copied. $$hashKey property is added by ng-repeat (when there is not explicit track by) and it is (unique..) hash, different with every render. So from two views, based by same model we will get objects with different $$hashKey. We have to remove it so that later we do not have problems with equality comparisons (like when removing)
            ClipboardService.add('itinerary', itinJsonObj);
            $state.go('createReservation.optionalServices');
        };
        $scope.searchStartedCallback = function(searchCriteria) {
            $scope.searchCompletedSuccessful = undefined;
            $scope.searchInProgress = true;
            $scope.searchInProgressParams = {
                origin: searchCriteria.getFirstLeg().origin,
                destination: searchCriteria.getFirstLeg().destination
            };
        };
        $scope.searchCompletedSuccessCallback = function(itins, searchCriteria) {
            $scope.searchCompletedSuccessful = true;
            $scope.searchInProgress = false;
            $scope.lastSuccessfulSearchCriteria =  searchCriteria;
            $scope.latestLeadPrice = itins.getLeadPrice();
        };
        $scope.searchCompletedErrorCallback = function(errMessages, searchCriteria) {
            $scope.searchCompletedSuccessful = false;
            $scope.searchInProgress = false;
        }
    }
    return ResultsPageCtrl;
});
