define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('widgets.lowFareForecast', {
                url: '/lowFareForecast',
                templateUrl: 'src/resources/intelligenceServices/lowFareForecast.tpl.html',
                controller: 'InspirationalSearchPageCtrl',
                data: {
                    widgetTitle: 'Low Fare Forecast'
                }
            })
            .state('widgets.fareRange', {
                url: '/fareRange',
                templateUrl: 'src/resources/intelligenceServices/fareRange.tpl.html',
                controller: 'InspirationalSearchPageCtrl',
                data: {
                    widgetTitle: 'Fare Range'
                }
            })
            .state('widgets.lowFareHistory', {
                url: '/lowFareHistory',
                templateUrl: 'src/resources/intelligenceServices/lowFareHistory.tpl.html',
                data: {
                    widgetTitle: 'Low Fare History'
                }
            }).state('widgets.travelSeasonality', {
                url: '/travelSeasonality',
                templateUrl: 'src/resources/intelligenceServices/travelSeasonality.tpl.html',
                data: {
                    widgetTitle: 'Travel Seasonality'
                }
            }).state('widgets.fareNabber', {
                url: '/fareNabber',
                templateUrl: 'src/resources/intelligenceServices/fareNabber.tpl.html',
                data: {
                    widgetTitle: 'FareNabber Subscribe'
                }
            })
    }
});