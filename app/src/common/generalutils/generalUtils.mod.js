define([
    'angular',
    'common/generalutils/arrayUtils'
], function (
    angular,
    ArrayUtils
) {
    'use strict';

    angular.module('otademoToolApp.generalUtils', [])
        .factory('ArrayUtils', ArrayUtils);
});