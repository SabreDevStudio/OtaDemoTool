define([
    'angular',
    'services/messagingServices'
], function (
    angular,
    messagingServices
) {
    'use strict';

    angular.module('otademoToolApp.controllers.SearchControllers', ['otademoToolApp.services.MessagingServices'])
        .factory('LastSearchCriteriaService', function () {
            var _lastSearchCriteria;
            return {
                get: function () {
                    return _lastSearchCriteria;
                },
                set: function (lastSearchCriteria) {
                    _lastSearchCriteria = lastSearchCriteria;
                }
            };
        })
        .controller('DefaultHomePageCtrl',[
                '$scope',
                'LastSearchCriteriaService',
             function (
                 $scope,
                 LastSearchCriteriaService
             ) {
                 $scope.lastSearchCriteria = {};
                 $scope.$watch('lastSearchCriteria', function (newCriteria, oldCriteria) {
                     if (angular.equals(newCriteria, oldCriteria)) {
                         return;
                     }
                     LastSearchCriteriaService.set(newCriteria);
                 });
             }])
        .controller('ResultsPageCtrl', [
                '$scope',
                'LastSearchCriteriaService',
                'LastSelectedItineraryService',
            function (
                $scope,
                LastSearchCriteriaService,
                LastSelectedItineraryService
            ) {
                $scope.newSearchCriteria = LastSearchCriteriaService.get();
                $scope.itinerarySelectedCallback = function (itin) {
                    LastSelectedItineraryService.set(itin);
                };
            }]);
});
