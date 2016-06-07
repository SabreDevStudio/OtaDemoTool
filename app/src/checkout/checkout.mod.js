define([
    'angular',
    'checkout/createReservation.ctr',
    'common/generalutils/generalUtils.mod',
    'common/services/commonServices.mod'
], function (
    angular,
    CreateReservationCtrl,
    generalUtilsModule,
    commonServicesModule
) {
    'use strict';

    angular.module('otademoToolApp.checkout', ['otademoToolApp.generalUtils', 'otademoToolApp.commonServices'])
        .controller('CreateReservationCtrl', CreateReservationCtrl);
});