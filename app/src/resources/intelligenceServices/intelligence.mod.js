define([
    'angular',
    './IntelligenceServices.ctrl',
    './intelligenceServices.rt'
], function (
    angular,
    IntelligenceServicesCtrl,
    IntelligenceServicesRoutes
) {
        'use strict'

    angular.module('otademoToolApp.resources.intelligenceServices', ['ui.router'])

        .controller('IntelligenceServicesCtrl', IntelligenceServicesCtrl)

        .config(['$stateProvider', IntelligenceServicesRoutes]);
});