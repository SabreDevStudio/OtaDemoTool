define([
    'angular',
    'common/directives/formsInput/selectCountryPhonePrefix.drv',
    'common/directives/formsInput/selectSeatType.drv',
    'common/directives/formsInput/selectFrequentFlyerProgram.drv',
    'common/directives/formsInput/selectMealPreference.drv',
    'common/directives/formsInput/specialServiceRequestAssistance.drv'
], function (
    angular,
    selectCountryPhonePrefixDirective,
    selectSeatTypeDirective,
    selectFrequentFlyerProgramDirective,
    selectMealPreferenceDirective,
    specialServiceRequestAssistanceDirective
) {
    'use strict';

    angular.module('otademoToolApp.commonFormInputDirectives', [])
        .directive('selectCountryPhonePrefix', selectCountryPhonePrefixDirective)
        .directive('selectSeatType', selectSeatTypeDirective)
        .directive('selectFrequentFlyerProgram', selectFrequentFlyerProgramDirective)
        .directive('selectMealPreference', selectMealPreferenceDirective)
        .directive('specialServiceRequestAssistance', specialServiceRequestAssistanceDirective);
});