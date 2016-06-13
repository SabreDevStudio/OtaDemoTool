define([
    'angular',
    'common/directives/util/newWindow.drv'
], function (
    angular,
    newWindow
) {
    'use strict';

    angular.module('otademoToolApp.commonUtilDirectives', [])
        .directive('newWindow', newWindow);
});