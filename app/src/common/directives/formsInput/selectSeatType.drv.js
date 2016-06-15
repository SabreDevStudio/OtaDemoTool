define([], function () {
    'use strict';

    function selectSeatType () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                selected: '='
            },
            templateUrl: 'src/common/directives/formsInput/selectSeatType.tpl.html',
            link: function ($scope) {
                $scope.seatTypes = ['Any Seat', 'Aisle Seat', 'Window Seat'];
                $scope.selected = $scope.selected || $scope.seatTypes[0];
            }
        };
    }
    return selectSeatType;
});