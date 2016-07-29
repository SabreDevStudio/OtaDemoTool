define([
    'angular',
    'common/widgets/searchStatus/searchInProgressMessage.drv',
    'common/widgets/searchStatus/searchErrorMessage.drv'
], function (
    angular,
    searchInProgressMessage,
    searchErrorMessage
) {
    'use strict';

    angular.module('otademoToolApp.widgets.searchStatus', [])
        .directive('searchInProgressMessage', searchInProgressMessage)
        .directive('searchErrorMessage', searchErrorMessage);
});