define([], function () {
    'use strict';

    return function searchCriteriaShort() {
        return {
            scope: {
                criteria: '='
            },
            templateUrl: 'src/common/directives/searchCriteriaShort.tpl.html'
        }
    };
});