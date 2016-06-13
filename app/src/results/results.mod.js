define([
    'angular',
    'results/results.ctr',
    'common/services/commonServices.mod',
    'SDSWidgets.lib'
], function (
    angular,
    ResultsPageCtrl,
    commonServicesModule,
    sabreDevStudioWidgets
) {
    'use strict';

    angular.module('otademoToolApp.results', ['otademoToolApp.commonServices', 'sDSLookups'])
        .controller('ResultsPageCtrl', ResultsPageCtrl);
});