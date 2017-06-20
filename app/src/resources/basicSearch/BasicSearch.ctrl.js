define([], function () {

    'use strict';

    function BasicSearchCtrl() {

        this.tiles = [];

        var bargainFinderMax = {
            title: 'Bargain Finder Max',
            description: 'Search for the lowest available priced itineraries based on your customer’s preferred travel date.',
            widgetUrl: 'widgets.bfm',
            apis: [
                {
                    name: 'Bargain Finder Max',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
                }
            ]
        };

        var instaFlightsSearch = {
            title: 'InstaFlights Search',
            description: 'Instantly review itinerary options by calling for published fares or fare breakdowns within a given city pair and departure date.',
            widgetUrl: 'widgets.instaFlights',
            apis: [
                {
                    name: 'InstaFlights Search',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/instaflights_search'
                }
            ]
        };

        var instaFlightsSearchWithFilters = {
            title: 'InstaFlights Filters',
            description: 'Enhance your published fare search by adding filters such as exclude carriers, retrieve online itineraries only or support passenger count.',
            widgetUrl: 'widgets.instaFlightsFilters',
            apis: [
                {
                    name: 'InstaFlights Search',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/instaflights_search'
                }
            ]
        };

        var bfmBrandedFares = {
            title: 'BFM Branded Fares',
            description: 'Identify bundled services in your low fare search to enable traveler upsell by emphasizing products and services included in a specific fare.',
            widgetUrl: 'widgets.bfmBrandedFares',
            apis: [
                {
                    name: 'Bargain Finder Max',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
                }
            ]
        }

        var bfmBaggageFilters = {
            title: 'BFM Bag Filters',
            description: 'Target your low fare search for priced itinerates with baggage detail and based on customers preferred travel date.',
            widgetUrl: 'widgets.bfmBagFilters',
            apis: [
                {
                    name: 'Bargain Finder Max',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
                }
            ]
        }

        this.tiles.push(bargainFinderMax, instaFlightsSearch, instaFlightsSearchWithFilters, bfmBrandedFares, bfmBaggageFilters);

    }

    return BasicSearchCtrl;
});
