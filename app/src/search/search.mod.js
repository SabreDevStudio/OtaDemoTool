define([
    'angular',
    'search/defaultHomePage.ctr',
    'common/services/commonServices.mod',
    'SDSWidgets.lib'
], function (
    angular,
    defaultHomePageCtrl,
    commonServicesModule,
    sabreDevStudioWidgets
) {
    'use strict';

    angular.module('otademoToolApp.search', ['otademoToolApp.commonServices', 'sDSLookups'])
        .controller('DefaultHomePageCtrl', defaultHomePageCtrl);
});