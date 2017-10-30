define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('widgets', {
                abstract: true,
                url: '/widgets',
                views: {
                    'mainNavigation': {
                        templateUrl: 'src/layout/mainNavigationWidgets.tpl.html',
                        controller: ['$state', function($state){
                            this.widgetTitle = $state.current.data.widgetTitle;
                        }],
                        controllerAs: 'ctrl'
                    },
                    'content': {
                        controller: ['$localStorage', function($localStorage){
                            this.originAirportCode = $localStorage.$default({origin: "FRA"}).origin;
                        }],
                        controllerAs: 'ctrl',
                        template: '<ui-view/>'
                    }
                },
            })
    }
});