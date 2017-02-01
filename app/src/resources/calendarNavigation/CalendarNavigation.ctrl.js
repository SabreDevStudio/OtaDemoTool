define([], function () {

    'use strict';

    function CalendarNavigationCtrl() {

        this.tiles = [];

        var leadPriceChartAdvancedCalendar = {
            title: 'Lead Price Chart (Advanced Calendar)',
            description: 'The Advanced Calendar Search API retrieves up to 200 roundtrip flight itineraries with published' +
                'fares available from the Sabre cache for a specific origin, destination, and length of stay across a large set or range of travel dates.',
            widgetUrl: 'widgets.leadPriceChartAdvancedCalendar',
            api: {
                name: 'Advanced Calendar Search',
                url: 'https://developer.sabre.com/docs/rest_apis/air/search/advanced_calendar_search/'
            }
        };

        var leadPriceChartLeadPriceCalendar = {
            title: 'Lead Price Chart (Lead Price Calendar)',
            description: 'The Lead Price Calendar API returns the lowest published fares each of the next 192 calendar days for a given city pair.',
            widgetUrl: 'widgets.leadPriceChartLeadPriceCalendar',
            api: {
                name: 'Lead Price Calendar',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/lead_price_calendar'
            }
        };

        var calendarTabsAdvancedCalendar = {
            title: 'Calendar Tab (Advanced Calendar)',
            description: 'The Advanced Calendar Search API retrieves up to 200 roundtrip flight itineraries with published' +
            'fares available from the Sabre cache for a specific origin, destination, and length of stay across a large set or range of travel dates.',
            widgetUrl: 'widgets.calendarTabsAdvancedCalendar',
            api: {
                name: 'Advanced Calendar Search',
                url: 'https://developer.sabre.com/docs/rest_apis/air/search/advanced_calendar_search/'
            }
        };

        var calendarTabsLeadPriceCalendar = {
            title: 'Calendar Tabs (Lead Price Calendar)',
            description: 'The Lead Price Calendar API returns the lowest published fares each of the next 192 calendar days for a given city pair.',
            widgetUrl: 'widgets.calendarTabsLeadPriceCalendar',
            api: {
                name: 'Lead Price Calendar',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/lead_price_calendar'
            }
        };

        var calendarNavigationAdvancedCalendar = {
            title: 'Calendar Navigation (Advanced Calendar)',
            description: 'The Advanced Calendar Search API retrieves up to 200 roundtrip flight itineraries with published' +
            'fares available from the Sabre cache for a specific origin, destination, and length of stay across a large set or range of travel dates.',
            widgetUrl: 'widgets.calendarNavigationAdvancedCalendar',
            api: {
                name: 'Advanced Calendar Search',
                url: 'https://developer.sabre.com/docs/rest_apis/air/search/advanced_calendar_search/'
            }
        };

        var calendarNavigationLeadPriceCalendar = {
            title: 'Calendar Navigation (Lead Price Calendar)',
            description: 'The Lead Price Calendar API returns the lowest published fares each of the next 192 calendar days for a given city pair.',
            widgetUrl: 'widgets.calendarNavigationLeadPriceCalendar',
            api: {
                name: 'Lead Price Calendar',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/lead_price_calendar'
            }
        };

        this.tiles.push(leadPriceChartAdvancedCalendar, leadPriceChartLeadPriceCalendar, calendarTabsAdvancedCalendar
            , calendarTabsLeadPriceCalendar, calendarNavigationAdvancedCalendar, calendarNavigationLeadPriceCalendar);
    }

    return CalendarNavigationCtrl;
})