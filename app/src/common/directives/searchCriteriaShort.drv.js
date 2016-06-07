define([], function () {
    'use strict';

    return function searchCriteriaShort() {
        return {
            scope: {
                criteria: '='
            },
            templateUrl: 'views/directives/SearchCriteriaShort.tpl.html'
        }
    };
});