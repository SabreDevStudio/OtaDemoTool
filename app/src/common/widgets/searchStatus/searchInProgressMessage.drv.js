define([
    'lodash'
], function (
    _
) {
    'use strict';

    function searchInProgressMessage() {
        return {
            restrict: 'E',
            scope: {
                searchParams: '='
            },
            templateUrl: 'src/common/widgets/searchStatus/searchInProgressMessage.tpl.html'
        }
    }
    return searchInProgressMessage;
});