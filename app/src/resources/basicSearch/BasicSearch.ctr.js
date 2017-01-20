define([], function () {

    'use strict';

    function BasicSearchCtrl() {

        this.tiles = [];

        var bargainFinderMax = {
            title: 'Flight List BFM',
            description: 'Bargain Finder Max (BFM), our best-in-class low fare search product, is used to search for the ' +
            'lowest available priced itineraries based upon a specific date.',
            widgetUrl: 'widgets/bfm.html',
            api: {
                name: 'Bargain Finder Max',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
            }
        };

        var instaFlightsSearch = {
            title: 'Flight List InstaFlights',
            description: 'The InstaFlights Search API retrieves roundtrip or one-way flight itineraries with published ' +
            'fares and fare breakdowns for a given city pair and departure date.',
            widgetUrl: '../widgetPage.html#/instaflights',
            api: {
                name: 'InstaFlights Search',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/instaflights_search'
            }
        };

        var instaFlightsSearchWithFilters = {
            title: 'Instaflights with filters',
            description: 'The InstaFlights Search API retrieves roundtrip or one-way flight itineraries with published ' +
            'fares and fare breakdowns for a given city pair and departure date.',
            widgetUrl: 'http://analytics.sabre.com/sdsdemo/dslab/widgets_DE/www/FiltersForFlightList.html',
            api: {
                name: 'InstaFlights Search',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/instaflights_search'
            }
        };

        var bfmBrandedFares = {
            title: 'BFM Branded Fares',
            description: 'Bargain Finder Max (BFM), our best-in-class low fare search product, is used to search for the ' +
            'lowest available priced itineraries based upon a specific date.',
            widgetUrl: '../widgetPage.html#/bfm',
            api: {
                name: 'Bargain Finder Max',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
            }
        }

        var bfmBaggageFilters = {
            title: 'BFM with Bag Filters',
            description: 'Bargain Finder Max (BFM), our best-in-class low fare search product, is used to search for the ' +
            'lowest available priced itineraries based upon a specific date.',
            widgetUrl: 'http://analytics.sabre.com/sdsdemo/dslab/widgets_DE/www/FlightListBFMShopByBag.html',
            api: {
                name: 'Bargain Finder Max',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
            }
        }

        this.tiles.push(bargainFinderMax, instaFlightsSearch, instaFlightsSearchWithFilters, bfmBrandedFares, bfmBaggageFilters);

    }

    return BasicSearchCtrl;
})