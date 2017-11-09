define([], function() {
    'use strict';
    
    return function WebService ($resource) {
        return {
            createGetResource: function (endpointURL) {
                return $resource(endpointURL, {}, {
                    get: {
                        method:'GET'
                    }
                });
            }
        };
    };
})