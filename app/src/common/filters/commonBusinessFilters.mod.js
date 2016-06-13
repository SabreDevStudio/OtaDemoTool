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
        });
});