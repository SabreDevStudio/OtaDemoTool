define([
    'lodash'
], function (
    _
) {
    'use strict';

    creditCardPaymentWidget.$inject = ['calendarModel'];
    function creditCardPaymentWidget(calendarModel) {
        return {
            restrict: 'E',
            scope: {
                paymentCompleteCallback: '&'
                /* this callback will be called with this return object (values will be defined)
                 {
                 creditCardCompany: undefined,
                 creditCardNumber: undefined,
                 expiry: {
                    month: undefined,
                    year: undefined
                 },
                 securityCode: undefined,
                 ownerFullName: undefined
                 };
                 */
            },
            templateUrl: 'src/common/widgets/creditCardPayment/creditCardPaymentWidget.tpl.html',
            link: function ($scope) {
                $scope.paymentData = $scope.paymentData || {};
                $scope.creditCardCompanies = ['Visa', 'MasterCard', 'AmericanExpress', 'Maestro', 'Discover', 'JCB'];

                var currentYear = new Date().getFullYear();
                $scope.calendarModel = calendarModel.generate(currentYear, currentYear + 10);
            }
        }
    };
    return creditCardPaymentWidget;
});