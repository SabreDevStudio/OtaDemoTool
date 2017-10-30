define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('widgets.themeTiles', {
                url: '/themeTiles',
                templateUrl: 'src/resources/inspirationalServices/themeTiles.tpl.html',
                controller: 'InspirationalSearchPageCtrl',
                data: {
                    widgetTitle: 'Theme Tiles (Destination Finder)'
                }
            })
            .state('widgets.themeMap', {
                url: '/themeMap',
                templateUrl: 'src/resources/inspirationalServices/themeMap.tpl.html',
                controller: 'InspirationalSearchPageCtrl',
                data: {
                    widgetTitle: 'Theme Map (Destination Finder)'
                }
            })
            .state('widgets.flightTo', {
                url: '/flightTo',
                templateUrl: 'src/resources/inspirationalServices/flightTo.tpl.html',
                data: {
                    widgetTitle: 'Flight To'
                }
            })
    }
});