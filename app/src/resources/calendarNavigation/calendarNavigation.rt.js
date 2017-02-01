define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('widgets.leadPriceChartAdvancedCalendar', {
                url: '/leadPriceChartAdvancedCalendar',
                templateUrl: 'src/resources/calendarNavigation/leadPriceChartAdvancedCalendar.html',
                data: {
                    widgetTitle: 'Lead Price Chart (Advanced Calendar)'
                }
            })
            .state('widgets.leadPriceChartLeadPriceCalendar', {
                url: '/leadPriceChartLeadPriceCalendar',
                templateUrl: 'src/resources/calendarNavigation/leadPriceChartLeadPriceCalendar.html',
                data: {
                    widgetTitle: 'Lead Price Chart (Lead Price Calendar)'
                }
            })
            .state('widgets.calendarTabsAdvancedCalendar', {
                url: '/calendarTabsAdvancedCalendar',
                templateUrl: 'src/resources/calendarNavigation/calendarTabsAdvancedCalendar.html',
                data: {
                    widgetTitle: 'Calendar Tabs (Advanced Calendar)'
                }
            })
            .state('widgets.calendarTabsLeadPriceCalendar', {
                url: '/calendarTabsLeadPriceCalendar',
                templateUrl: 'src/resources/calendarNavigation/calendarTabsLeadPriceCalendar.html',
                data: {
                    widgetTitle: 'Calendar Tabs (Lead Price Calendar)'
                }
            })
            .state('widgets.calendarNavigationAdvancedCalendar', {
                url: '/calendarNavigationAdvancedCalendar',
                templateUrl: 'src/resources/calendarNavigation/calendarNavigationAdvancedCalendar.html',
                data: {
                    widgetTitle: 'Calendar Navigation (Advanced Calendar)'
                }
            })
            .state('widgets.calendarNavigationLeadPriceCalendar', {
                url: '/calendarNavigationLeadPriceCalendar',
                templateUrl: 'src/resources/calendarNavigation/calendarNavigationLeadPriceCalendar.html',
                data: {
                    widgetTitle: 'Calendar Navigation (Lead Price Calendar)'
                }
            })
    }
});