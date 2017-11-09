define([], function () {
    'use strict';

    return function searchCriteriaShort(AirportsResourceService) {
        return {
            templateUrl: 'src/common/directives/topNavigation.tpl.html',
            controller: ['$localStorage', 'countryConfigs', 'selectedCountryConfigs', '$state', '$timeout',
            function ($localStorage, countryConfigs, selectedCountryConfigs, $state, $timeout) {
                var _this = this;
                this.originCodePreset = '';
                this.selectedCountry = $localStorage.$default({selectedCountry: "US"}).selectedCountry;

                navigator.geolocation.getCurrentPosition(function(position) {
                    AirportsResourceService.getNearestAirport(position.coords.latitude, position.coords.longitude).$promise.then(function(data){
                        _this.originCodePreset = data.code;
                    });
                });

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
                
                this.reload = function () {
                    $timeout($state.reload, 500);
                }
            }],
            controllerAs: 'topNavigationCtrl'
        }
    };
});