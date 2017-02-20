define([], function () {
    'use strict';

    return function searchCriteriaShort() {
        return {

            templateUrl: 'src/common/directives/topNavigation.tpl.html',
            controller: ['$localStorage', 'countryConfigs', 'selectedCountryConfigs', function ($localStorage, countryConfigs, selectedCountryConfigs) {

                this.selectedCountry = $localStorage.$default({selectedCountry: "DE"}).selectedCountry;
                updateselectedCountryConfigs(this.selectedCountry )

                this.setSelectedCountry = function (newValue) {
                    this.selectedCountry = newValue;
                    $localStorage.selectedCountry = newValue
                    updateselectedCountryConfigs(newValue);
                }

                function updateselectedCountryConfigs(newValue) {
                    selectedCountryConfigs.apiURL = countryConfigs[newValue].apiURL;
                    selectedCountryConfigs.apiSpecificHeaders = countryConfigs[newValue].apiSpecificHeaders;
                    selectedCountryConfigs.pointOfSaleCountry = countryConfigs[newValue].pointOfSaleCountry;
                    selectedCountryConfigs.bfmRequestPcc = countryConfigs[newValue].bfmRequestPcc;
                }
            }],
            controllerAs: 'topNavigationCtrl'
        }
    };
});