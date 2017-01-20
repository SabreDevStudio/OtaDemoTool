define([
    'angular'
], function (

) {
    'use strict';

    return function widgetTile() {

        return {
            require: 'ngModel',
            scope:{
                ngModel: '='
            },
            templateUrl: 'src/resources/widgetTile.tpl.html'
        }
    }
})