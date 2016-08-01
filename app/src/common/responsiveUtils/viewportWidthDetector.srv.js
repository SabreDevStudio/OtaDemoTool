define([
    'lodash'
], function (_) {
    'use strict';

    function ViewportWidthDetectorService($window) {
        // is better get first the innerWitdh that will not include a lateral panel
        // like the console inspector, bookmarks, etc
        var winWidth = $window.innerWidth || $window.outerWidth;

        var service   = {
            isXs: function () { return winWidth < 768; },
            isSm: function () { return winWidth >= 768 && winWidth < 992; },
            isMd: function () { return winWidth >= 992 && winWidth < 1200; },
            isLg: function () { return winWidth >= 1200; }
        };

        return service;
    }
    return ViewportWidthDetectorService;
});
