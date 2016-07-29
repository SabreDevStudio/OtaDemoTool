define([
    'angular',
    'inspirationalRouteKnown/InspirationalRouteKnown.ctr'
], function (
    angular,
    InspirationalSearchPageCtrl
) {
    'use strict';

    angular.module('otademoToolApp.inspirationalForRoute', [])
        .controller('InspirationalRouteKnownCtrl', InspirationalSearchPageCtrl);
});