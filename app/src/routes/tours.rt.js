define([
], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('toursSearchPage', {
                url: '/toursSearch',
                views: {
                    'header': {
                        templateUrl: 'src/header.tpl.html'
                    },
                    'content': {
                        templateUrl: 'src/tours/toursSearchPage.tpl.html',
                        controller: 'ToursSearchPageCtrl'
                    }
                }
            })
            .state('tourList', {
                url: '/tourList',
                views: {
                    'header': {
                        templateUrl: 'src/header.tpl.html'
                    },
                    'content': {
                        templateUrl: 'src/tours/tourList.tpl.html',
                        controller: 'ToursListCtrl'
                    }
                }
            })
            .state('tourDetails', {
                url: '/tourDetails',
                views: {
                    'header': {
                        templateUrl: 'src/header.tpl.html'
                    },
                    'content': {
                        templateUrl: 'src/tours/tourDetails.tpl.html',
                        controller: 'TourDetailsCtrl'
                    }
                }
            })
    };
});
