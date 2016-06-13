define([], function () {
    'use strict';

    function selectCountryPhonePrefix () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                selected: '='
            },
            templateUrl: 'src/common/directives/formsInput/selectCountryPhonePrefix.tpl.html',
            link: function ($scope) {
                $scope.countriesPrefixModel = {
                    "PL": {
                        "name": "Poland",
                        "iso2": "PL",
                        "code": "48"
                    },
                    "DE": {
                        "name": "Germany",
                        "iso2": "DE",
                        "code": "49"
                    },
                    "AT": {
                        "name": "Austria",
                        "iso2": "AT",
                        "code": "43"
                    },
                    "US": {
                        "name": "United States",
                        "iso2": "US",
                        "code": "1"
                    },
                    "GB": {
                        "name": "United Kingdom",
                        "iso2": "GB",
                        "code": "1 473"
                    }
                };
            }
        };
    }
    return selectCountryPhonePrefix;
});