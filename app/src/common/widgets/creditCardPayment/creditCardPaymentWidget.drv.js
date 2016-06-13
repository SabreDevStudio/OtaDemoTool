define([
], function (
) {
    'use strict';

    creditCardPaymentWidget.$inject = ['calendarModel'];
    function creditCardPaymentWidget(calendarModel) {
        return {
            restrict: 'E',
            scope: {
                paymentData: '='
            },
            templateUrl: 'src/common/widgets/creditCardPayment/creditCardPaymentWidget.tpl.html',
            link: function ($scope) {
                $scope.paymentData = initializeReturnObject();

                $scope.creditCardCompanies = ['Visa', 'MasterCard', 'AmericanExpress', 'Maestro', 'Discover', 'JCB'];

                var currentYear = new Date().getFullYear();
                $scope.calendarModel = calendarModel.generate(currentYear, currentYear + 10);

                function initializeReturnObject() {
                    return {
                        creditCardCompany: undefined,
                        expiry: {
                            month: undefined,
                            year: undefined
                        },
                        securityCode: undefined,
                        ownerFullName: undefined
                    };
                }
            }
        }
    };
    return creditCardPaymentWidget;
});