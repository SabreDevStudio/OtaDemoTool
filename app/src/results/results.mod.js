define([
    'angular',
    'results/results.ctr',
    'common/services/commonServices.mod'
], function (
    angular,
    ResultsPageCtrl,
    commonServicesModule
) {
    'use strict';

    angular.module('otademoToolApp.results', ['otademoToolApp.commonServices', 'sDSLookups'])
        .controller('ResultsPageCtrl', ResultsPageCtrl);
});