define([
    'lodash'
], function (
    _
) {
    'use strict';

    function ReservationConfirmationCtrl($scope, $stateParams) {

        $scope.anySpecialServiceRequestDefined = function () {
            return _.values($scope.reservationData.travellerData.specialServiceRequest).some(_.negate(_.isUndefined));
        };

        $scope.reservationData = $stateParams.reservationData;
        $scope.itinerary = $stateParams.itinerary;
    }
    return ReservationConfirmationCtrl;
});