define([], function() {
    'use strict';
    
    return function airportsResourceService (WebService) {
        return {
            getNearestAirport: function(latitude, longitude) {
                return WebService.createGetResource('http://airports.ds36.net/api/airports/nearest/_search').get({
                    lat: latitude,
                    lng: longitude
                })
            }
        }
    };
})