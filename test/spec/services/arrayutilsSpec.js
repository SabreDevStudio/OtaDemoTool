/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: arrayUtils', function () {

    // load the service's module
    beforeEach(module('otademoToolApp.services.ArrayUtils'));

    // instantiate service
    var arrayUtils;
    beforeEach(inject(function (_arrayUtils_) {
      arrayUtils = _arrayUtils_;
    }));

    it('should do something', function () {
      expect(!!arrayUtils).toBe(true);
    });

  });
});
