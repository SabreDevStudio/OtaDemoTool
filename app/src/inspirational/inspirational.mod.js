define([
    'angular',
    'inspirational/InspirationalSearchPage.ctr',
    'SDSWidgets.lib'
], function (
    angular,
    InspirationalSearchPageCtrl,
    sabreDevStudioWidgets
) {
    'use strict';

    angular.module('otademoToolApp.inspirationalSearch', ['sdsWidgets.inspirationalWidgets'])
        .controller('InspirationalSearchPageCtrl', InspirationalSearchPageCtrl);
});