define([], function () {

    'use strict';

    function CalendarNavigationCtrl() {

        this.tiles = [];

        var leadPriceChartAdvancedCalendar = {
            title: 'Lead Price Chart AC',
            description: 'The Advanced Calendar Search API retrieves up to 200 roundtrip flight itineraries with published' +
                'fares available from the Sabre cache for a specific origin, destination, and length of stay across a large set or range of travel dates.',
            widgetUrl: 'widgets/calendarNavigation/leadPriceChartAdvancedCalendar.html',
            api: {
                name: 'Advanced Calendar Search',
                url: 'https://developer.sabre.com/docs/rest_apis/air/search/advanced_calendar_search/'
            }
        };

        this.tiles.push(leadPriceChartAdvancedCalendar);
    }

    return CalendarNavigationCtrl;
})