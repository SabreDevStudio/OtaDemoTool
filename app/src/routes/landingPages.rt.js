define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
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
            .state('landingPageRouteKnown', {
                url: '/flights/:origin/:destination',
                views: {
                    'header': {
                        templateUrl: 'src/header.tpl.html'
                    },
                    'content': {
                        templateUrl: 'src/results/inspirationalRouteKnown.tpl.html',
                        controller: 'LandingPageCtrl'
                    }
                }
            })
            .state('landingPageFlightsTo', {
                url: '/flights-to/:destination',
                views: {
                    'header': {
                        templateUrl: 'src/header.tpl.html'
                    },
                    'content': {
                        templateUrl: 'src/results/inspirationalFlightsTo.tpl.html',
                        controller: 'LandingPageFlightsToCtrl'
                    }
                }
            })
            .state('landingPageFlightsFrom', {
                url: '/flights-from/:origin',
                views: {
                    'header': {
                        templateUrl: 'src/header.tpl.html'
                    },
                    'content': {
                        templateUrl: 'src/inspirational/inspirationalSearchPage.tpl.html',
                        controller: 'LandingPageFlightsFromCtrl'
                    }
                }
            })
    };
});
