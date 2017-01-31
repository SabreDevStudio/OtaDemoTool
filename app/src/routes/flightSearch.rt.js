define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('results', {
                parent: 'index',
                url: '^/results',
                views: {
                    'content': {
                        templateUrl: 'src/results/results.tpl.html',
                        controller: 'ResultsPageCtrl'
                    }
                }
            })
            .state('createReservation', {
                url: '/createReservation',
                views: {
                    // Do not show header when doing checkout per requirements
                    'content': {
                        templateUrl: 'src/checkout/createReservation.index.tpl.html',
                        controller: 'CreateReservationCtrl'
                    }
                }
            })
            .state('createReservation.optionalServices', {
                url: '/optionalServices',
                templateUrl: 'src/checkout/optionalServices.tpl.html'
            })
            .state('createReservation.travellerDataInput', {
                url: '/travellerDataInput',
                templateUrl: 'src/checkout/travellerDataInput.tpl.html'
            })
            .state('createReservation.paymentDetailsInput', {
                url: '/paymentDetailsInput',
                templateUrl: 'src/checkout/paymentDetailsInput.tpl.html'
            })

            .state('reservationConfirmation', {
                url: '/reservationConfirmation',
                params: {
                    reservationData: undefined,
                    itinerary: undefined
                },
                views: {
                    'header': {
                        templateUrl: 'src/header.tpl.html'
                    },
                    'content': {
                        templateUrl: 'src/checkout/reservationConfirmation.tpl.html',
                        controller: 'ReservationConfirmationCtrl'
                    }
                }
            });
    };
});
