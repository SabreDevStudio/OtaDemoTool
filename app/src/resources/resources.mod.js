define([
    'angular',
    'resources/widgetTile.drv',
    'resources/basicSearch/BasicSearch.ctrl',
    'resources/calendarNavigation/CalendarNavigation.ctrl',
    'resources/resources.rt',
    'resources/basicSearch/basicSearch.rt',
    'resources/calendarNavigation/calendarNavigation.rt',
    'resources/widgets.rt',
], function (
    angular,
    WidgetTile,
    BasicSearchCtrl,
    CalendarNavigationCtrl,
    ResourcesRoutes,
    BasicSearchRoutes,
    CalendarNavigationRoutes,
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

        .config(['$stateProvider', ResourcesRoutes])
        .config(['$stateProvider', BasicSearchRoutes])
        .config(['$stateProvider', CalendarNavigationRoutes])
        .config(['$stateProvider', WidgetsRoutes])
});