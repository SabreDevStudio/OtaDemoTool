define([
    'angular',
    'common/directives/searchCriteriaShort.drv',
    'common/directives/topNavigation.drv'
], function (
    angular,
    SearchCriteriaShort,
    TopNavigation
) {
    'use strict';

    angular.module('otademoToolApp.commonDirectives', [
        'ngStorage',
        'configuration',
    ])
        .directive('searchCriteriaShort', SearchCriteriaShort)
        .directive('topNavigation', TopNavigation);
});