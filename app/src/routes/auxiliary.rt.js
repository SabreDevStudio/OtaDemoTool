define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
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
    };
});
