define([
    'angular',
    'resources/widgetTile.drv',
    'resources/basicSearch/BasicSearch.ctrl',
    'resources/calendarNavigation/CalendarNavigation.ctrl',
    'resources/compare/Compare.ctrl',
    'resources/compare/BfmVsInstaFlights.ctrl',
    'resources/resources.rt',
    'resources/basicSearch/basicSearch.rt',
    'resources/calendarNavigation/calendarNavigation.rt',
    'resources/compare/compare.rt',
    'resources/widgets.rt',
], function (
    angular,
    WidgetTile,
    BasicSearchCtrl,
    CalendarNavigationCtrl,
    CompareCtrl,
    BfmVsInstaFlightsCtrl,
    ResourcesRoutes,
    BasicSearchRoutes,
    CalendarNavigationRoutes,
    CompareRoutes,
    WidgetsRoutes
) {
    'use strict';

    angular
        .module('otademoToolApp.resources', [
        'ui.router'
    ])
        .directive('widgetTile', WidgetTile)

        .controller('BasicSearchCtrl', BasicSearchCtrl)
        .controller('CalendarNavigationCtrl', CalendarNavigationCtrl)
        .controller('CompareCtrl', CompareCtrl)
        .controller('BfmVsInstaFlightsCtrl', ['ShoppingProfileService', BfmVsInstaFlightsCtrl])

        .config(['$stateProvider', ResourcesRoutes])
        .config(['$stateProvider', BasicSearchRoutes])
        .config(['$stateProvider', CalendarNavigationRoutes])
        .config(['$stateProvider', CompareRoutes])
        .config(['$stateProvider', WidgetsRoutes])
});