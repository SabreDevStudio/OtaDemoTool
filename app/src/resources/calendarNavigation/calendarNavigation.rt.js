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
    }
});