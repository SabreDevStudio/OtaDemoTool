define([
    'angular',
    'resources/widgetTile.drv',
    'resources/basicSearch/BasicSearch.ctr'
], function (
    angular,
    WidgetTile,
    BasicSearchCtrl
) {
    'use strict';

    angular.module('otademoToolApp.resources', [])
        .directive('widgetTile', WidgetTile)
        .controller('BasicSearchCtrl', BasicSearchCtrl)
});