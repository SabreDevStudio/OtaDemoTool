define([], function () {
    'use strict';

    return function PredefinedAirportClosestAirportService($localStorage) {
        return {
            get: function () {
                return $localStorage.$default({origin: "FRA"}).origin;
            }
        };
    };
});
