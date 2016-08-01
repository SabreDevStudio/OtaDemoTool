define([
    'lodash'
], function (
    _
) {
    'use strict';

    function buildCompileFn(widthVerifyFn) {
        return function compile(element, attr, transclude) {
            return function postLink(scope, element) {
                if (widthVerifyFn()) {
                    return;
                }
                var childElement, childScope;
                childScope = scope.$new();
                childElement = transclude(childScope, function (clone) {
                    element.after(clone);
                });

                scope.$on( "$destroy", function () {
                    if (childElement) {
                        childElement.remove();
                        childScope.$destroy();
                    }
                });
            };
        };
    }

    // the convention how to use that classes is same as Bootstrap http://getbootstrap.com/css/#responsive-utilities
    // one inconvenience is that you cannot use multiple such directives on one element, like <div visible-md visible-lg>. It is because both directives would ask for transclusion on same scope.
    // In most cases using only one class like hidden-xs, or visible lg is enough.
    return {
        hiddenXs: function (ViewportWidthDetectorService) {
            return {
                restrict: 'A',
                template: '<div></div>',
                transclude: 'element',
                compile: buildCompileFn(ViewportWidthDetectorService.isXs)
            };
        },
        hiddenSm: function (ViewportWidthDetectorService) {
            return {
                restrict: 'A',
                template: '<div></div>',
                transclude: 'element',
                compile: buildCompileFn(ViewportWidthDetectorService.isSm)
            };
        },
        hiddenMd: function (ViewportWidthDetectorService) {
            return {
                restrict: 'A',
                template: '<div></div>',
                transclude: 'element',
                compile: buildCompileFn(ViewportWidthDetectorService.isMd)
            };
        },
        hiddenLg: function (ViewportWidthDetectorService) {
            return {
                restrict: 'A',
                template: '<div></div>',
                transclude: 'element',
                compile: buildCompileFn(ViewportWidthDetectorService.isLg)
            };
        },
        visibleXs: function (ViewportWidthDetectorService) {
            return {
                restrict: 'A',
                template: '<div></div>',
                transclude: 'element',
                compile: buildCompileFn(_.negate(ViewportWidthDetectorService.isXs))
            };
        },
        visibleSm: function (ViewportWidthDetectorService) {
            return {
                restrict: 'A',
                template: '<div></div>',
                transclude: 'element',
                compile: buildCompileFn(_.negate(ViewportWidthDetectorService.isSm))
            };
        },
        visibleMd: function (ViewportWidthDetectorService) {
            return {
                restrict: 'A',
                template: '<div></div>',
                transclude: 'element',
                compile: buildCompileFn(_.negate(ViewportWidthDetectorService.isMd))
            };
        },
        visibleLg: function (ViewportWidthDetectorService) {
            return {
                restrict: 'A',
                template: '<div></div>',
                transclude: 'element',
                compile: buildCompileFn(_.negate(ViewportWidthDetectorService.isLg))
            };
        },
    };
});