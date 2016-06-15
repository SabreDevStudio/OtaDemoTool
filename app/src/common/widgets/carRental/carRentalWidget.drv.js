define([
], function (
) {
    'use strict';

    return function carRentalWidget() {
        return {
            restrict: 'E',
            scope: {
                pickupLocation: '@', // 3 letter airport/city code
                pickupDateTime: '=', // plain Date object
                returnDateTime: '=', // plain Date object
                carReservation: '=' // output obj
            },
            templateUrl: 'src/common/widgets/carRental/carRentalWidget.tpl.html',
            link: function (scope) {

                scope.selectCar = function (car) {
                    scope.carReservation = {
                        carSelected: car,
                        pickupLocation: scope.pickupLocation,
                        pickupDateTime: scope.pickupDateTime,
                        returnDateTime: scope.returnDateTime
                    };
                };

                scope.removeSelection = function () {
                    scope.carReservation = undefined;
                };

                scope.carsOffer = [
                    {
                        brand: 'Toyota',
                        model: 'Aygo',
                        class: 'Mini',
                        seats: 4,
                        doors: 4,
                        airConditioning: 'Manual',
                        transmission: 'Manual',
                        price: 183,
                        priceWithDiscount: 160,
                        currency: 'EUR',
                        img: 'toyota_aygo.jpg'
                    },
                    {
                        brand: 'Ford',
                        model: 'Fiesta',
                        class: 'Economy',
                        seats: 5,
                        doors: 4,
                        airConditioning: 'Manual',
                        transmission: 'Manual',
                        price: 192,
                        priceWithDiscount: 182,
                        currency: 'EUR',
                        img: 'ford_fiesta.jpg'
                    },
                    {
                        brand: 'Honda',
                        model: 'Civic',
                        class: 'Compact',
                        seats: 5,
                        doors: 5,
                        airConditioning: 'Manual',
                        transmission: 'Automatic',
                        price: 216,
                        priceWithDiscount: 199,
                        currency: 'EUR',
                        img: 'honda_civic.jpg'
                    },
                    {
                        brand: 'Opel',
                        model: 'Insignia',
                        class: '',
                        seats: 5,
                        doors: 4,
                        airConditioning: 'Automatic',
                        transmission: 'Automatic',
                        price: 230,
                        priceWithDiscount: 210,
                        currency: 'EUR',
                        img: 'opel_insignia.jpg'
                    }
                ];
            }
        }
    };
});