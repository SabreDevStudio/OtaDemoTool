define([
    'angular',
    'common/widgets/creditCardPayment/creditCardPaymentWidget.drv',
    'common/generalutils/generalUtils.mod'
], function (
    angular,
    creditCardPaymentWidget,
    generalUtilsModule
) {
    'use strict';

    angular.module('otademoToolApp.widgets.creditCardPayment', ['otademoToolApp.generalUtils'])
        .directive('creditCardPaymentWidget', creditCardPaymentWidget);
});