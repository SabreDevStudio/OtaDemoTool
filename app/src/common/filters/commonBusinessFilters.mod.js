define([
    'angular'
], function (
    angular
) {
    'use strict';

    angular.module('otademoToolApp.commonBusinessFilters', [])
        .filter('title', function () {
            return function (gender) {
                switch (gender) {
                    case 'M': return 'Mr';
                    case 'F': return 'Ms';
                    default: return '';
                }
            };
        })
        .filter('phoneCountryPrefix', function () {
            return function (prefix) {
                if (_.isUndefined(prefix) || prefix.length === 0) {
                    return;
                }
                return '++' + prefix
            };
        });

});