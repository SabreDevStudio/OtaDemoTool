define([
    'angular',
    'search/defaultHomePage.ctr',
    'search/lastSearchCriteria.srv',
    'common/services/commonServices.mod',
    'SDSWidgets.lib'
], function (
    angular,
    defaultHomePageCtrl,
    LastSearchCriteriaService,
    commonServicesModule,
    sabreDevStudioWidgets
) {
    'use strict';

    angular.module('otademoToolApp.search', ['otademoToolApp.commonServices', 'sDSLookups'])
        .controller('DefaultHomePageCtrl', defaultHomePageCtrl)
        .service('LastSearchCriteriaService', LastSearchCriteriaService);
});