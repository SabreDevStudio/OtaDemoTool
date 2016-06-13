define([
    'angular',
    'common/generalutils/arrayUtils',
    'common/generalutils/calendarModel'
], function (
    angular,
    ArrayUtils,
    calendarModel
) {
    'use strict';

    angular.module('otademoToolApp.generalUtils', [])
        .factory('ArrayUtils', ArrayUtils)
        .factory('calendarModel', calendarModel);
});