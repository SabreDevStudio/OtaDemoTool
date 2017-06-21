define([], function () {

    'use strict';

    function AlternateDatesCtrl() {

        this.tiles = [];

        var flightListAdvancedCalendar = {
            title: 'Flight List (Advanced Calendar)',
            description: 'View a list of potential flights sorted by price and by non-stop, one-stop or multi-stop. Include additional parameters for flexibility options.',
            widgetUrl: 'widgets.flightListAdvancedCalendar',
            apis: [
                {
                    name: 'Advanced Calendar Search',
                    url: 'https://developer.sabre.com/docs/rest_apis/air/search/advanced_calendar_search/'
                }
            ]
        };

        var DatesMatrixAdvancedCalendar = {
            title: 'Dates Matrix (Advanced Calendar)',
            description: 'View potential flights by price in a date matrix of departure and arrival pair.',
            widgetUrl: 'widgets.datesMatrixAdvancedCalendar',
            apis: [
                {
                    name: 'Advanced Calendar Search',
                    url: 'https://developer.sabre.com/docs/rest_apis/air/search/advanced_calendar_search/'
                }
            ]
        };

        var datesMatrixLeadPriceCalendar = {
            title: 'Dates Matrix (Lead Price Calendar)',
            description: 'View potential flights by price in a date matrix of departure and arrival pair.',
            widgetUrl: 'widgets.datesMatrixLeadPriceCalendar',
            apis: [
                {
                    name: 'Lead Price Calendar',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/lead_price_calendar'
                }
            ]
        };

        var datesMatrixBfmCalendarShopping = {
            title: 'Dates Matrix (BFM Calendar Shopping)',
            description: 'View potential flights by price in date matrix of departure and arrival pair using Bargain Finder Max API call.',
            widgetUrl: 'widgets.datesMatrixBFMCalendarShopping',
            apis: [
                {
                    name: 'Bargain Finder Max',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
                }
            ]
        }

        this.tiles.push(flightListAdvancedCalendar, DatesMatrixAdvancedCalendar, datesMatrixLeadPriceCalendar, datesMatrixBfmCalendarShopping);

    }

    return AlternateDatesCtrl;
});
