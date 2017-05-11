define([], function () {

    'use strict';

    function BasicSearchCtrl() {

        this.tiles = [];

        var bargainFinderMax = {
            title: 'Bargain Finder Max',
            description: 'Bargain Finder Max (BFM), our best-in-class low fare search product, is used to search for the ' +
            'lowest available priced itineraries based upon a specific date.',
            widgetUrl: 'widgets.bfm',
            api: {
                name: 'Bargain Finder Max',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
            }
        };

        var instaFlightsSearch = {
            title: 'InstaFlights Search',
            description: 'The InstaFlights Search API retrieves roundtrip or one-way flight itineraries with published ' +
            'fares and fare breakdowns for a given city pair and departure date.',
            widgetUrl: 'widgets.instaFlights',
            api: {
                name: 'InstaFlights Search',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/instaflights_search'
            }
        };

        var instaFlightsSearchWithFilters = {
            title: 'InstaFlights Filters',
            description: 'The InstaFlights Search API retrieves roundtrip or one-way flight itineraries with published ' +
            'fares and fare breakdowns for a given city pair and departure date.',
            widgetUrl: 'widgets.instaFlightsFilters',
            api: {
                name: 'InstaFlights Search',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/instaflights_search'
            }
        };

        var bfmBrandedFares = {
            title: 'BFM Branded Fares',
            description: 'Bargain Finder Max (BFM), our best-in-class low fare search product, is used to search for the ' +
            'lowest available priced itineraries based upon a specific date.',
            widgetUrl: 'widgets.bfmBrandedFares',
            api: {
                name: 'Bargain Finder Max',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
            }
        }

        var bfmBaggageFilters = {
            title: 'BFM Bag Filters',
            description: 'Bargain Finder Max (BFM), our best-in-class low fare search product, is used to search for the ' +
            'lowest available priced itineraries based upon a specific date.',
            widgetUrl: 'widgets.bfmBagFilters',
            api: {
                name: 'Bargain Finder Max',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
            }
        }

        this.tiles.push(bargainFinderMax, instaFlightsSearch, instaFlightsSearchWithFilters, bfmBrandedFares, bfmBaggageFilters);

    }

    return BasicSearchCtrl;
<<<<<<< HEAD
});
=======
})
>>>>>>> 52340a0999ac5e932126de13cdfd9861286c593a
