define([
    'angular',
    'common/responsiveUtils/viewportWidthDetector.srv',
    'common/responsiveUtils/responsiveUtils.drv'
], function (
    angular,
    ViewportWidthDetectorService,
    ResponsiveUtilsDirective
) {
    'use strict';

    // Wholly based on https://github.com/lavinjj/angular-responsive
    // We did not make direct dependency on that library, because:
    //  - it depends also on User Agent sniffing
    //  - it does not support requireJS out of the box
    //  - we wanted to extend with hidden classes as well

    angular.module('otademoToolApp.responsiveUtils', [])
        .factory('ViewportWidthDetectorService', [
            '$window',
            ViewportWidthDetectorService
        ])
        .directive('hiddenXs', ['ViewportWidthDetectorService', ResponsiveUtilsDirective.hiddenXs])
        .directive('hiddenSm', ['ViewportWidthDetectorService', ResponsiveUtilsDirective.hiddenSm])
        .directive('hiddenMd', ['ViewportWidthDetectorService', ResponsiveUtilsDirective.hiddenMd])
        .directive('hiddenLg', ['ViewportWidthDetectorService', ResponsiveUtilsDirective.hiddenLg])
        .directive('visibleXs', ['ViewportWidthDetectorService', ResponsiveUtilsDirective.visibleXs])
        .directive('visibleSm', ['ViewportWidthDetectorService', ResponsiveUtilsDirective.visibleSm])
        .directive('visibleMd', ['ViewportWidthDetectorService', ResponsiveUtilsDirective.visibleMd])
        .directive('visibleLg', ['ViewportWidthDetectorService', ResponsiveUtilsDirective.visibleLg])
});