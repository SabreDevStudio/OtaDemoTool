define([], function () {
    'use strict';

    function selectCountryPhonePrefix () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                prefix: '='
            },
            templateUrl: 'src/common/directives/formsInput/selectCountryPhonePrefix.tpl.html',
            link: function ($scope) {
                $scope.countriesPrefixModel = [
                    {
                        "name": "Poland",
                        "iso2": "PL",
                        "prefix": "48"
                    },
                    {
                        "name": "Germany",
                        "iso2": "DE",
                        "prefix": "49"
                    },
                    {
                        "name": "Austria",
                        "iso2": "AT",
                        "prefix": "43"
                    },
                    {
                        "name": "United States",
                        "iso2": "US",
                        "prefix": "1"
                    },
                    {
                        "name": "United Kingdom",
                        "iso2": "GB",
                        "prefix": "1 473"
                    }
                ];
            }
        };
    }
    return selectCountryPhonePrefix;
});