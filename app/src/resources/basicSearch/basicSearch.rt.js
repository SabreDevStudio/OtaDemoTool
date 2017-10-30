define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('widgets.bfm', {
                url: '/bfm',
                templateUrl: 'src/resources/basicSearch/bfm.tpl.html',
                data: {
                    widgetTitle: 'Bargain Finder Max'
                }
            })
            .state('widgets.instaFlights', {
                url: '/instaFlights',
                templateUrl: 'src/resources/basicSearch/instaFlights.tpl.html',
                data: {
                    widgetTitle: 'InstaFlights Search'
                }
            })
            .state('widgets.instaFlightsFilters', {
                url: '/instaFlightsFilters',
                templateUrl: 'src/resources/basicSearch/instaFlightsFilters.tpl.html',
                data: {
                    widgetTitle: 'InstaFlights Filters'
                }
            })
            .state('widgets.bfmBrandedFares', {
                url: '/bfmBrandedFares',
                templateUrl: 'src/resources/basicSearch/bfmBrandedFares.tpl.html',
                data: {
                    widgetTitle: 'BFM Branded Fares'
                }
            })
            .state('widgets.bfmBagFilters', {
                url: '/bfmBagFilters',
                templateUrl: 'src/resources/basicSearch/bfmBagFilters.tpl.html',
                data: {
                    widgetTitle: 'BFM Bag Filters'
                }
            })


    }
});