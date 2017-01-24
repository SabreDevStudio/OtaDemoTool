define([
    'angular',
    'resources/widgetTile.drv',
    'resources/basicSearch/BasicSearch.ctrl',
    'resources/calendarNavigation/CalendarNavigation.ctrl'
], function (
    angular,
    WidgetTile,
    BasicSearchCtrl,
    CalendarNavigationCtrl
) {
    'use strict';

    angular.module('otademoToolApp.resources', [])
        .directive('widgetTile', WidgetTile)
        .controller('BasicSearchCtrl', BasicSearchCtrl)
        .controller('CalendarNavigationCtrl', CalendarNavigationCtrl)
});