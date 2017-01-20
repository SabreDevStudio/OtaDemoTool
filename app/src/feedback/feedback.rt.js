define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('contact', {
                url: '/feedback/contact',
                views: {
                    'content': {
                        templateUrl: 'src/feedback/contact.tpl.html'
                    }
                }
            })
    }
});