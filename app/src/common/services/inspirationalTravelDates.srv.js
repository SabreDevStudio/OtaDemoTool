define([], function () {
    'use strict';

    return function LastSearchCriteriaService() {

        const MILLIS_IN_ONE_DAY = 86400000;
        const ADVANCE_PURCHASE_DAYS = 30;
        const LENGTH_OF_STAY_DAYS = 14;

        return {
            getTravelDates: function () {
                var currentDateMillis = new Date().getTime();
                var outboundDepartureDate = new Date(currentDateMillis + ADVANCE_PURCHASE_DAYS * MILLIS_IN_ONE_DAY);
                var inboundDepartureDate =  new Date(outboundDepartureDate.getTime() + LENGTH_OF_STAY_DAYS * MILLIS_IN_ONE_DAY);
                return {
                    outboundDepartureDate: outboundDepartureDate,
                    inboundDepartureDate: inboundDepartureDate,
                    altDatesPlusMinus: 7
                };
            }
        };
    };
});
