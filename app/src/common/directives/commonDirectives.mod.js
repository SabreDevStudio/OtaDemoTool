define([
    'angular',
    'common/directives/searchCriteriaShort.drv',
    'common/directives/topNavigation.drv',
    'common/services/webService.srv',
    'common/services/airportsResourceService.srv'
], function (
    angular,
    SearchCriteriaShort,
    TopNavigation,
    WebService,
    AirportsResourceService
) {
    'use strict';

    angular.module('otademoToolApp.commonDirectives', [
        'ngStorage',
        'configuration'
    ])
        .directive('searchCriteriaShort', SearchCriteriaShort)
        .directive('topNavigation', ['AirportsResourceService', TopNavigation])
        .service('WebService', ['$resource', WebService])
        .service('AirportsResourceService',['WebService', AirportsResourceService]);
});