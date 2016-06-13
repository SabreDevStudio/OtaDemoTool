define([], function () {
    'use strict';

    return function carDirective() {
        return {
            restrict: 'E',
            scope: {
                car: '=',
                hideSelectButton: '@?',
                carSelectedCallback: '&?'
            },
            templateUrl: 'src/common/widgets/carRental/car.tpl.html',
            link: function (scope) {
                scope.selectCar = function (car) {
                    scope.carSelectedCallback({car: car});
                };
            }
        }
    };
});