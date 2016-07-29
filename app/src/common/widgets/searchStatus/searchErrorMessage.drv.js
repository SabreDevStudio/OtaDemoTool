define([
    'lodash'
], function (
    _
) {
    'use strict';

    function searchErrorMessage() {
        return {
            restrict: 'E',
            scope: {
                searchParams: '='
            },
            templateUrl: 'src/common/widgets/searchStatus/searchErrorMessage.tpl.html'
        }
    }
    return searchErrorMessage;
});