define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name otademoToolApp.arrayUtils
   * @description
   * # arrayUtils
   * Factory in the otademoToolApp.
   */
  angular.module('otademoToolApp.services.ArrayUtils', [])
    .factory('ArrayUtils', function () {

      return {
        generateSequence: function (start, end) {
          var sequence = [];
          for (var i=start; i<=end; i++) {
            sequence.push(i);
          }
          return sequence;
        }
      };
    });
});
