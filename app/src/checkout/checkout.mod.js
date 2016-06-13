define([
    'angular',
    'checkout/createReservation.ctr',
    'checkout/reservationConfirmation.ctr',
    'common/generalutils/generalUtils.mod',
    'common/services/commonServices.mod',
    'common/directives/util/commonUtilDirectives.mod',
    'common/directives/formsInput/commonFormsDirectives.mod',
    'common/filters/commonBusinessFilters.mod',
    'common/widgets/carRental/carRentalWidget.mod',
    'common/widgets/creditCardPayment/creditCardPaymentWidget.mod'
], function (
    angular,
    CreateReservationCtrl,
    ReservationConfirmationCtrl,
    generalUtilsModule,
    commonServicesModule,
    commonUtilDirectivesModule,
    commonFrmsInputDirectivesModule,
    commonBusinessFiltersModule,
    carRentalWidget,
    creditCardPaymentWidgetModule
) {
    'use strict';

    angular.module('otademoToolApp.checkout', [
        'otademoToolApp.generalUtils',
        'otademoToolApp.commonServices',
        'otademoToolApp.commonUtilDirectives',
        'otademoToolApp.commonFormInputDirectives',
        'otademoToolApp.commonBusinessFilters',
        'otademoToolApp.widgets.carRental',
        'otademoToolApp.widgets.creditCardPayment'
    ])
        .controller('CreateReservationCtrl', CreateReservationCtrl)
        .controller('ReservationConfirmationCtrl', ReservationConfirmationCtrl);
});