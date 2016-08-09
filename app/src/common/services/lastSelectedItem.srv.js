define([
    'lodash'
    ], function (
    _
) {
  'use strict';

    function LastSelectedItemService() {
        var _lastSelectedItem;
        return {
          get: function () {
            return _lastSelectedItem;
          },
          set: function (lastSelectedItem) {
            _lastSelectedItem = lastSelectedItem;
          }
        };
    };

    return LastSelectedItemService;
});
