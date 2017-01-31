define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('demoHomePage', {
                parent: 'index',
                url: '^/demoHomePage',
                views: {
                    'content': {
                        templateUrl: 'src/demo/demo.tpl.html'
                    },
                    'searchForm@demoHomePage': {
                        templateUrl: 'src/search/searchForm.tpl.html',
                        controller: 'DefaultHomePageCtrl'
                    }
                }
            })
    };
});
