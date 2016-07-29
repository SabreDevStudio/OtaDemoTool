define([], function () {
    'use strict';

    return function QueryParamsClosestAirportService(queryParams) {
        return {
            get: function () {
                return queryParams.origin;
            }
        };
    };
});
