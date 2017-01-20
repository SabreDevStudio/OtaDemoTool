define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('cookiesPolicy', {
                url: '/cookies-policy',
                views: {
                    'content': {
                        templateUrl: 'src/policies/cookiesPolicy.tpl.html'
                    }
                }
            })
            .state('privacyPolicy', {
                url: '/privacy-policy',
                views: {
                    'content': {
                        templateUrl: 'src/policies/privacyPolicy.tpl.html'
                    }
                }
            })
            .state('termsOfUse', {
                url: '/terms-of-use',
                views: {
                    'content': {
                        templateUrl: 'src/policies/termsOfUse.tpl.html'
                    }
                }
            })
    }
});