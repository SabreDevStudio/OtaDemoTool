define([
    'angular',
    'resources/widgetTile.drv',
    'resources/basicSearch/BasicSearch.ctrl',
    'resources/calendarNavigation/CalendarNavigation.ctrl',
    'resources/alternateDates/AlternateDates.ctrl',
    'resources/compare/Compare.ctrl',
    'resources/compare/BfmVsInstaFlights.ctrl',
    'resources/resources.rt',
    'resources/basicSearch/basicSearch.rt',
    'resources/calendarNavigation/calendarNavigation.rt',
    'resources/alternateDates/alternateDates.rt',
    'resources/compare/compare.rt',
    'resources/widgets.rt',
    'resources/inspirationalServices/inspirational.mod',
    'resources/intelligenceServices/intelligence.mod'
], function (
    angular,
    WidgetTile,
    BasicSearchCtrl,
    CalendarNavigationCtrl,
    AlternateDatesCtrl,
    CompareCtrl,
    BfmVsInstaFlightsCtrl,
    ResourcesRoutes,
    BasicSearchRoutes,
    CalendarNavigationRoutes,
    AlternateDatesRoutes,
    CompareRoutes,
    WidgetsRoutes,
    InspirationalModule,
    IntelligenceModule
) {
    'use strict';

    angular
        .module('otademoToolApp.resources', [
            'otademoToolApp.resources.inspirationalServices',
            'otademoToolApp.resources.intelligenceServices',
            'ui.router'
        ])
        .directive('widgetTile', WidgetTile)

        .controller('BasicSearchCtrl', BasicSearchCtrl)
        .controller('CalendarNavigationCtrl', CalendarNavigationCtrl)
        .controller('CompareCtrl', CompareCtrl)
        .controller('BfmVsInstaFlightsCtrl', ['ShoppingProfileService', BfmVsInstaFlightsCtrl])
        .controller('AlternateDatesCtrl', AlternateDatesCtrl)

        .config(['$stateProvider', ResourcesRoutes])
        .config(['$stateProvider', BasicSearchRoutes])
        .config(['$stateProvider', CalendarNavigationRoutes])
        .config(['$stateProvider', AlternateDatesRoutes])
        .config(['$stateProvider', CompareRoutes])
        .config(['$stateProvider', WidgetsRoutes])
});