/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: CreateReservationCtrl', function () {

    // load the controller's module
    beforeEach(module('otademoToolApp.controllers.CreateReservationCtrl'));

    var CreateReservationCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      CreateReservationCtrl = $controller('CreateReservationCtrl', {
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(CreateReservationCtrl.awesomeThings.length).toBe(3);
    });
  });
});
