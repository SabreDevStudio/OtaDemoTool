define([], function () {
    'use strict';

    function specialServiceRequestAssistance () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                selected: '='
            },
            templateUrl: 'src/common/directives/formsInput/specialServiceRequestAssistance.tpl.html',
            link: function ($scope) {
                $scope.assistanceTypes = ['None', 'Blind', 'Deaf', 'Wheelchair'];
                $scope.selected = $scope.selected || $scope.assistanceTypes[0];
            }
        };
    }
    return specialServiceRequestAssistance;
});