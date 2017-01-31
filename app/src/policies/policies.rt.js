define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('cookiesPolicy', {
                parent: 'index',
                url: '^/cookiesPolicy',
                views: {
                    'content': {
                        templateUrl: 'src/policies/cookiesPolicy.tpl.html'
                    }
                }
            })
            .state('privacyPolicy', {
                parent: 'index',
                url: '^/privacyPolicy',
                views: {
                    'content': {
                        templateUrl: 'src/policies/privacyPolicy.tpl.html'
                    }
                }
            })
            .state('termsOfUse', {
                parent: 'index',
                url: '^/termsOfUse',
                views: {
                    'content': {
                        templateUrl: 'src/policies/termsOfUse.tpl.html'
                    }
                }
            })
    }
});