define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('resources', {
                abstract: true,
                url: '/resources',
                views: {
                    'content': {
                        templateUrl: 'src/resources/resources.tpl.html'
                    }
                }
            })
            .state('resources.basicSearch', {
                url: '/basicSearch',
                views: {
                    'main-content@resources': {
                        templateUrl: 'src/resources/basicSearch.tpl.html'
                    }
                }
            })
            .state('resources.calendarSearch', {
                url: '/calendarSearch',
                views: {
                    'main-content@resources': {
                        templateUrl: 'src/resources/calendarSearch.tpl.html'
                    }
                }
            })
    }
});