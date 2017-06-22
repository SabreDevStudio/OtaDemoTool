define([], function () {

    'use strict';

    function InspirationalServicesCtrl() {

        this.tiles = [];

        var themesTiles = {
            title: 'Theme Tiles (Destination Finder)',
            description: 'Return graphical location tiles when searching for lowest fare options from your destination to a theme based location such as the beach or historical sights.',
            widgetUrl: 'widgets.themeTiles',
            apis: [
                {
                    name: 'Destination Finder',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/destination_finder'
                }
            ]
        };

        var themeMap = {
            title: 'Theme Map (Destination Finder)',
            description: 'Return an interactive map when searching for lowest fare options from your destination to a specific region with themes such as the beach or historical sights.',
            widgetUrl: 'widgets.themeMap',
            apis: [
                {
                    name: 'Destination Finder',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/destination_finder'
                }
            ]
        };

        var flightTo = {
            title: 'Flight To',
            description: 'Create travel packages to top destinations buy identifying origins with low fare flight options to a selected locations.',
            widgetUrl: 'widgets.flightTo',
            apis: [
                {
                    name: 'Flights To',
                    url: 'https://developer.sabre.com/docs/rest_apis/air/search/flights_to/'
                }
            ]
        };

        this.tiles.push(themesTiles, themeMap, flightTo);

    }

    return InspirationalServicesCtrl;
});
