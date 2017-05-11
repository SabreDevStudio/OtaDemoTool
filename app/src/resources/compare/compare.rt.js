define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('widgets.bfmVsInstaFlights', {
                url: '/bfmVsInstaFlights',
                templateUrl: 'src/resources/compare/bfmVsInstaFlights.tpl.html',
                data: {
                    widgetTitle: 'BFM vs. InstaFlights Search'
                }
            })
            .state('widgets.bfmVsBfmDiversity', {
                url: '/bfmVsBfmDiversity',
                templateUrl: 'src/resources/compare/bfmVsBfmDiversity.tpl.html',
                data: {
                    widgetTitle: 'BFM vs. BFM Diversity Search'
                }
            })
    }
});