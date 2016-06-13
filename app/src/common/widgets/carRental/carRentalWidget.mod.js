define([
    'angular',
    'common/widgets/carRental/carRentalWidget.drv',
    'common/widgets/carRental/car.drv'
], function (
    angular,
    carRentalWidget,
    carDirective
) {
    'use strict';

    angular.module('otademoToolApp.widgets.carRental', [])
        .directive('carRentalWidget', carRentalWidget)
        .directive('car', carDirective);
});