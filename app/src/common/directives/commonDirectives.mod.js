define([
    'angular',
    'common/directives/searchCriteriaShort.drv',
], function (
    angular,
    SearchCriteriaShort,
    TopNavigation
) {
    'use strict';

    angular.module('otademoToolApp.commonDirectives', [])
        .directive('searchCriteriaShort', SearchCriteriaShort);
});