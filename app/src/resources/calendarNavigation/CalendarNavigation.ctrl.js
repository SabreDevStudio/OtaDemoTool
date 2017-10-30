define([], function () {

    'use strict';

    function CalendarNavigationCtrl() {

        this.tiles = [];

        var leadPriceChartAdvancedCalendar = {
            title: 'Lead Price Chart (Advanced Calendar)',
            description: 'View price by date via bar graph with a call for lead non-stop and overall flights; provides full itinerary.',
            widgetUrl: 'widgets.leadPriceChartAdvancedCalendar',
            apis: [
                {
                    name: 'Advanced Calendar Search',
                    url: 'https://developer.sabre.com/docs/rest_apis/air/search/advanced_calendar_search/'
                }
            ]
        };

        var leadPriceChartLeadPriceCalendar = {
            title: 'Lead Price Chart (Lead Price Calendar)',
            description: 'View price by date via bar graph with a call for lead non-stop and overall flights. A second call required to provide flight itineraries.',
            widgetUrl: 'widgets.leadPriceChartLeadPriceCalendar',
            apis: [
                {
                    name: 'Lead Price Calendar',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/lead_price_calendar'
                },
                {
                    name: 'Bargain Finder Max',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
                }
            ]
        };

        var calendarTabsAdvancedCalendar = {
            title: 'Calendar Tab (Advanced Calendar)',
            description: 'View price by date via single month calendar view with a call for lead non-stop and overall flights; provides full itinerary.',
            widgetUrl: 'widgets.calendarTabsAdvancedCalendar',
            apis: [
                {
                    name: 'Advanced Calendar Search',
                    url: 'https://developer.sabre.com/docs/rest_apis/air/search/advanced_calendar_search/'
                }
            ]
        };

        var calendarTabsLeadPriceCalendar = {
            title: 'Calendar Tabs (Lead Price Calendar)',
            description: 'View price by date via single month calendar view with a call for lead non-stop and overall flights. A second call required to provide flight itineraries.',
            widgetUrl: 'widgets.calendarTabsLeadPriceCalendar',
            apis: [
                {
                    name: 'Lead Price Calendar',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/lead_price_calendar'
                },
                {
                    name: 'Bargain Finder Max',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
                }
            ]
        };

        var calendarNavigationAdvancedCalendar = {
            title: 'Calendar Navigation (Advanced Calendar)',
            description: 'View price by date via multi-month calendar view with a call for lead non-stop and overall flights; provides full itinerary',
            widgetUrl: 'widgets.calendarNavigationAdvancedCalendar',
            apis: [
                {
                    name: 'Advanced Calendar Search',
                    url: 'https://developer.sabre.com/docs/rest_apis/air/search/advanced_calendar_search/'
                }
            ]
        };

        var calendarNavigationLeadPriceCalendar = {
            title: 'Calendar Navigation (Lead Price Calendar)',
            description: 'View price by date via multi-month calendar view with a call for lead non-stop and overall flights. A second call required to provide flight itineraries.',
            widgetUrl: 'widgets.calendarNavigationLeadPriceCalendar',
            apis: [
                {
                    name: 'Lead Price Calendar',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/lead_price_calendar'
                },
                {
                    name: 'Bargain Finder Max',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
                }
            ]
        };

        this.tiles.push(leadPriceChartAdvancedCalendar, leadPriceChartLeadPriceCalendar, calendarTabsAdvancedCalendar
            , calendarTabsLeadPriceCalendar, calendarNavigationAdvancedCalendar, calendarNavigationLeadPriceCalendar);
    }

    return CalendarNavigationCtrl;
})