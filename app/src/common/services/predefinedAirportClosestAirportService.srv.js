define([], function () {
    'use strict';

    return function PredefinedAirportClosestAirportService() {
        return {
            get: function () {
                return "FRA";
            }
        };
    };
});
