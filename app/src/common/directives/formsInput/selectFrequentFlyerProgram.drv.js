define([], function () {
    'use strict';

    function selectFrequentFlyerProgram () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                selected: '='
            },
            templateUrl: 'src/common/directives/formsInput/selectFrequentFlyerProgram.tpl.html',
            link: function ($scope) {
                $scope.airlinesFrequentFlyerPrograms = [ // : dropdown at Expd page + number input program number
                    {
                        airlineCode: 'LH',
                        programName: 'Miles&More'
                    },
                    {
                        airlineCode: 'AA',
                        programName: 'AAdvantage'
                    },
                    {
                        airlineCode: 'AF',
                        programName: 'Flying Blue'
                    },
                    {
                        airlineCode: 'BA',
                        programName: 'Executive Club'
                    }
                ];
            }
        };
    }
    return selectFrequentFlyerProgram;
});