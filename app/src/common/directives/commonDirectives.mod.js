define([
    'angular',
    'common/directives/searchCriteriaShort.drv'
], function (
    angular,
    SearchCriteriaShort
) {
    'use strict';

    angular.module('otademoToolApp.commonDirectives', [])
        .directive('searchCriteriaShort', SearchCriteriaShort);
});