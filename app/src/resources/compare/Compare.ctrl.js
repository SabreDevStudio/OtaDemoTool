define([], function () {

    'use strict';
    
    function CompareCtrl() {

        this.tiles = [];

        var bfmVsInstaFlightsSearchTile = {
            title: 'BFM vs. InstaFlights Search',
            description: 'Compare the speed and itinerary retuned from live call shopping via Bargain Finder Max versus cache based shopping via InstaFlight.',
            widgetUrl: 'widgets.bfmVsInstaFlights',
            apis: [
                {
                    name: 'Bargain Finder Max',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
                },
                {
                    name: 'InstaFlights Search',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/instaflights_search'
                }
            ]
        };

        var bfmVsBfmDiversitySearchTile = {
            title: 'BFM vs. BFM Diversity Search',
            description: 'Compare the returned itinerary options when using basis search parameters with Bargain Finder Max versus custom weighted search parameters via the Diversity search.',
            widgetUrl: 'widgets.bfmVsBfmDiversity',
            apis: [
                {
                    name: 'Bargain Finder Max',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/search/bargain_finder_max'
                }
            ]
        };

        this.tiles.push(bfmVsInstaFlightsSearchTile, bfmVsBfmDiversitySearchTile);
    }

    return CompareCtrl;
});