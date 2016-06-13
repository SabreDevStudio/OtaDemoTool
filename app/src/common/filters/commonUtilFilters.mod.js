define([
    'angular'
], function (
    angular
) {
    'use strict';

    angular.module('otademoToolApp.commonUtilFilters', [])
        .filter('localizedShortMonth', ['$locale', function ($locale) {
            return function (monthIndex) {
                return $locale.DATETIME_FORMATS.SHORTMONTH[monthIndex];
            };
        }]);
});