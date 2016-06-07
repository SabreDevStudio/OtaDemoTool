define([
    'angular',
    'common/directives/searchCriteriaShort.drv'
], function (
    angular,
    SearchCriteriaShort
) {
    'use strict';

    angular.module('otademoToolApp.commonServices', [])
        .directive('SearchCriteriaShort', SearchCriteriaShort);
});