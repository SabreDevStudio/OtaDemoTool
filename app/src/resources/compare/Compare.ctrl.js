define([], function () {

    'use strict';
    
    function CompareCtrl() {

        this.tiles = [];

        var bfmVsInstaFlightsSearchTile = {
            title: 'BFM vs. InstaFlights Search',
            description: 'Bargain Finder Max (BFM), our best-in-class low fare search product, is used to search for the ' +
            'lowest available priced itineraries based upon a specific date.',
            widgetUrl: 'widgets.bfmVsInstaFlights',
            api: {
                name: 'Bargain Finder Max',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
            }
        };

        var bfmVsBfmDiversitySearchTile = {
            title: 'BFM vs. BFM Diversity Search',
            description: 'Bargain Finder Max (BFM), our best-in-class low fare search product, is used to search for the ' +
            'lowest available priced itineraries based upon a specific date.',
            widgetUrl: 'widgets.bfmVsBfmDiversity',
            api: {
                name: 'Bargain Finder Max',
                url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
            }
        };

        this.tiles.push(bfmVsInstaFlightsSearchTile, bfmVsBfmDiversitySearchTile);
    }

    return CompareCtrl;
});