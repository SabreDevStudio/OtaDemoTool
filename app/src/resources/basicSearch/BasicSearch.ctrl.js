define([], function () {

    'use strict';

    function BasicSearchCtrl() {

        this.tiles = [];

        var bargainFinderMax = {
            title: 'Bargain Finder Max',
            description: 'Bargain Finder Max (BFM), our best-in-class low fare search product, is used to search for the ' +
            'lowest available priced itineraries based upon a specific date.',
            widgetUrl: 'widgets/basicSearch/bfm.html',
            api: {
                name: 'Bargain Finder Max',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
            }
        };

        var instaFlightsSearch = {
            title: 'InstaFlights Search',
            description: 'The InstaFlights Search API retrieves roundtrip or one-way flight itineraries with published ' +
            'fares and fare breakdowns for a given city pair and departure date.',
            widgetUrl: 'widgets/basicSearch/instaflights.html',
            api: {
                name: 'InstaFlights Search',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/instaflights_search'
            }
        };

        var instaFlightsSearchWithFilters = {
            title: 'InstaFlights Filters',
            description: 'The InstaFlights Search API retrieves roundtrip or one-way flight itineraries with published ' +
            'fares and fare breakdowns for a given city pair and departure date.',
            widgetUrl: 'widgets/basicSearch/instaFlightsFilters.html',
            api: {
                name: 'InstaFlights Search',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/instaflights_search'
            }
        };

        var bfmBrandedFares = {
            title: 'BFM Branded Fares',
            description: 'Bargain Finder Max (BFM), our best-in-class low fare search product, is used to search for the ' +
            'lowest available priced itineraries based upon a specific date.',
            widgetUrl: 'widgets/basicSearch/bfmBrandedFares.html',
            api: {
                name: 'Bargain Finder Max',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
            }
        }

        var bfmBaggageFilters = {
            title: 'BFM Bag Filters',
            description: 'Bargain Finder Max (BFM), our best-in-class low fare search product, is used to search for the ' +
            'lowest available priced itineraries based upon a specific date.',
            widgetUrl: 'widgets/basicSearch/bfmBagFilters.html',
            api: {
                name: 'Bargain Finder Max',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
            }
        }

        this.tiles.push(bargainFinderMax, instaFlightsSearch, instaFlightsSearchWithFilters, bfmBrandedFares, bfmBaggageFilters);

    }

    return BasicSearchCtrl;
})