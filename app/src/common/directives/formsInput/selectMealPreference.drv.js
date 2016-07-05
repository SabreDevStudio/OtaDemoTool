define([], function () {
    'use strict';

    function selectMealPreference () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                preference: '='
            },
            templateUrl: 'src/common/directives/formsInput/selectMealPreference.tpl.html',
            link: function ($scope) {
                $scope.mealPreferenceTypes = ['No preference', 'Vegetarian', 'Child', 'Diabetic', 'Gluten-intolerant', 'Low fat', 'Kosher'];
                $scope.preference = $scope.preference || $scope.mealPreferenceTypes[0];
            }
        };
    }
    return selectMealPreference;
});