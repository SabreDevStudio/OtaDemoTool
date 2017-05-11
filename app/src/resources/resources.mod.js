define([
    'angular',
    'resources/widgetTile.drv',
    'resources/basicSearch/BasicSearch.ctrl',
    'resources/calendarNavigation/CalendarNavigation.ctrl',
<<<<<<< HEAD
    'resources/compare/Compare.ctrl',
    'resources/resources.rt',
    'resources/basicSearch/basicSearch.rt',
    'resources/calendarNavigation/calendarNavigation.rt',
    'resources/compare/compare.rt',
=======
    'resources/resources.rt',
    'resources/basicSearch/basicSearch.rt',
    'resources/calendarNavigation/calendarNavigation.rt',
>>>>>>> 52340a0999ac5e932126de13cdfd9861286c593a
    'resources/widgets.rt',
], function (
    angular,
    WidgetTile,
    BasicSearchCtrl,
    CalendarNavigationCtrl,
<<<<<<< HEAD
    CompareCtrl,
    ResourcesRoutes,
    BasicSearchRoutes,
    CalendarNavigationRoutes,
    CompareRoutes,
=======
    ResourcesRoutes,
    BasicSearchRoutes,
    CalendarNavigationRoutes,
>>>>>>> 52340a0999ac5e932126de13cdfd9861286c593a
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
<<<<<<< HEAD
        .controller('CompareCtrl', CompareCtrl)
=======
>>>>>>> 52340a0999ac5e932126de13cdfd9861286c593a

        .config(['$stateProvider', ResourcesRoutes])
        .config(['$stateProvider', BasicSearchRoutes])
        .config(['$stateProvider', CalendarNavigationRoutes])
<<<<<<< HEAD
        .config(['$stateProvider', CompareRoutes])
=======
>>>>>>> 52340a0999ac5e932126de13cdfd9861286c593a
        .config(['$stateProvider', WidgetsRoutes])
});