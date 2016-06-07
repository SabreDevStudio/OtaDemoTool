define([
    'angular',
    'common/ui/clipboard/clipboard.ctr',
    'common/services/commonServices.mod'
], function (
    angular,
    ClipboardCtrl,
    commonServicesModule
) {
    'use strict';

    angular.module('otademoToolApp.clipboard', ['otademoToolApp.commonServices'])
        .controller('ClipboardCtrl', ClipboardCtrl);
});