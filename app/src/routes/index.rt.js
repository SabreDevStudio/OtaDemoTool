//This is the parent state for all states used to display content apart from the widget page.
// It's used to define the main navigation which is common for all of them.

define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('index', {
                abstract: true,
                url: '/main',
                views: {
                    'mainNavigation': {
                        templateUrl: 'src/layout/mainNavigation.html'
                    },
                    'content': {
                        template: '<div ui-view="content"></div>'
                    }
                }
            })

    };
});
