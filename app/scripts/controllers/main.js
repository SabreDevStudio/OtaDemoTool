define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name otademoToolApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the otademoToolApp
   */
  angular.module('otademoToolApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
