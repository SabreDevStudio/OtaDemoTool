define([
    'angular',
    'common/ui/clipboard/clipboard.ctr',
    'common/services/commonServices.mod',
    'common/directives/commonDirectives.mod'
], function (
    angular,
    ClipboardCtrl,
    commonServicesModule
) {
    'use strict';

    angular.module('otademoToolApp.clipboard', [
        'otademoToolApp.commonServices',
        'otademoToolApp.commonDirectives',
        'SDSWidgets.SerializationServices'
    ])
        .controller('ClipboardCtrl', ClipboardCtrl);
});