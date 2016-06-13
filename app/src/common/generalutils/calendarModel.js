define([], function () {
    'use strict';

    CalendarModel.$inject = ['ArrayUtils', '$locale'];
    function CalendarModel(ArrayUtils, $locale) {
        return {
            generate: function (yearFrom, yearToInclusive) {
                return {
                    years: ArrayUtils.generateSequence(yearFrom, yearToInclusive),
                    months: ArrayUtils.generateSequence(0, 11).map(function (seqNumber, index) {
                        return {
                            seqNumber: seqNumber,
                            name: $locale.DATETIME_FORMATS.SHORTMONTH[index]
                        };
                    }),
                    monthDays: ArrayUtils.generateSequence(1, 31)
                };
            }
        };
    }
    return CalendarModel;
});
