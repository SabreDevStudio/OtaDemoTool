define([
    'lodash'
], function (
    _
) {
    'use strict';

    ReservationConfirmationCtrl.$inject = ['$scope', '$stateParams'];
    function ReservationConfirmationCtrl($scope, $stateParams) {

        $scope.anySpecialServiceRequestDefined = function () {
            return _.values($scope.reservationData.travellerData.specialServiceRequest).some(_.negate(_.isUndefined));
        };

        $scope.reservationData = $stateParams.reservationData;
        console.log($scope.reservationData);
        $scope.itinerary = $stateParams.itinerary;
    }
    return ReservationConfirmationCtrl;
});