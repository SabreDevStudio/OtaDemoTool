define([], function () {
    'use strict';

    return function newWindow() {
        return {
            restrict: 'A',
            compile: function(element) {
                element.attr('target', '_blank');
            }
        }
    };
});