define([], function () {
    'use strict';

    function selectSeatType () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                type: '='
            },
            templateUrl: 'src/common/directives/formsInput/selectSeatType.tpl.html',
            link: function ($scope) {
                $scope.seatTypes = ['Any Seat', 'Aisle Seat', 'Window Seat'];
                $scope.type = $scope.type || $scope.seatTypes[0];
            }
        };
    }
    return selectSeatType;
});