/*jshint unused: vars */
define([
    'angular',
    'angular-ui-router',
    'search/search.mod',
    'checkout/checkout.mod',
    'results/results.mod',
    'common/ui/clipboard/clipboard.mod',
    'inspirational/inspirational.mod',
    'templates.mod'
], function (angular,
             uiRouter,
             searchModule,
             checkoutModule,
             resultsModule,
             clipboardModule,
             inspirationalModule,
             templatesModule) {
    'use strict';

    return angular
        .module('otademoToolApp', [
            'otademoToolApp.search',
            'otademoToolApp.checkout',
            'otademoToolApp.clipboard',
            'otademoToolApp.results',
            'otademoToolApp.inspirationalSearch',
            'ui.router',
            'sdsWidgets',
            'otademoToolApp.templates'
        ])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('defaultHomePage', {
                    url: '/defaultHomePage',
                    views: {
                        'header': {
                            templateUrl: 'src/header.tpl.html'
                        },
                        'content': {
                            templateUrl: 'src/search/defaultHomePage.tpl.html'
                        },
                        'searchForm@defaultHomePage': {
                            templateUrl: 'src/search/searchForm.tpl.html',
                            controller: 'DefaultHomePageCtrl'
                        },
                        'inspirationalSuggestions@defaultHomePage': {
                            templateUrl: 'src/inspirational/inspirationalSuggestions.tpl.html',
                            controller: 'InspirationalSearchPageCtrl'
                        }
                    }
                })
                .state('results', {
                    url: '/results',
                    views: {
                        'header': {
                            templateUrl: 'src/header.tpl.html'
                        },
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
                })

                .state('landingPageRoundTrip', {
                    url: '/flights/:origin/:destination/:outboundDepartureDateTime/:inboundDepartureDateTime',
                    views: {
                        'header': {
                            templateUrl: 'src/header.tpl.html'
                        },
                        'content': {
                            templateUrl: 'src/results/results.tpl.html',
                            controller: 'LandingPageCtrl'
                        }
                    }
                })
                .state('landingPageOneWay', {
                    url: '/flights/:origin/:destination/:outboundDepartureDateTime',
                    views: {
                        'header': {
                            templateUrl: 'src/header.tpl.html'
                        },
                        'content': {
                            templateUrl: 'src/results/results.tpl.html',
                            controller: 'LandingPageCtrl'
                        }
                    }
                })

                .state('inspirationalSearchPage', {
                    url: '/inspirationalSearch',
                    views: {
                        'header': {
                            templateUrl: 'src/header.tpl.html'
                        },
                        'content': {
                            templateUrl: 'src/inspirational/inspirationalSearchPage.tpl.html',
                            controller: 'InspirationalSearchPageCtrl'
                        }
                    }
                })
                .state('clipboard', {
                    url: '/clipboard',
                    views: {
                        'header': {
                            templateUrl: 'src/header.tpl.html'
                        },
                        'content': {
                            templateUrl: 'src/common/ui/clipboard/clipboard.tpl.html',
                            controller: 'ClipboardCtrl'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/defaultHomePage');
        }]);
});
