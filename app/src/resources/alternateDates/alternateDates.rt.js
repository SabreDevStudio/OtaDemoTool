define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('widgets.flightListAdvancedCalendar', {
                url: '/flightListAdvancedCalendar',
                templateUrl: 'src/resources/alternateDates/flightListAdvancedCalendar.tpl.html',
                data: {
                    widgetTitle: 'Flight List (Advanced Calendar)'
                }
            })
            .state('widgets.datesMatrixAdvancedCalendar', {
                url: '/datesMatrixAdvancedCalendar',
                templateUrl: 'src/resources/alternateDates/datesMatrixAdvancedCalendar.tpl.html',
                data: {
                    widgetTitle: 'Dates Matrix (Advanced Calendar)'
                }
            })
            .state('widgets.datesMatrixLeadPriceCalendar', {
                url: '/datesMatrixLeadPriceCalendar',
                templateUrl: 'src/resources/alternateDates/datesMatrixLeadPriceCalendar.tpl.html',
                data: {
                    widgetTitle: 'Dates Matrix (Lead Price Calendar)'
                }
            })
            .state('widgets.datesMatrixBFMCalendarShopping', {
                url: '/datesMatrixBFMCalendarShopping',
                templateUrl: 'src/resources/alternateDates/datesMatrixBFMCalendarShopping.tpl.html',
                data: {
                    widgetTitle: 'Dates Matrix (BFM Calendar Shopping)'
                }
            })
    }
});