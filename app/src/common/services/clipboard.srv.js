define([
    'lodash'
    ], function (
    _
) {
  'use strict';

    ClipboardService.$inject = ['$localStorage'];
    function ClipboardService($localStorage) {
        var storage = (function () {
            if (_.isUndefined($localStorage['ClipboardService'])) {
                $localStorage['ClipboardService'] = {};
            }
            return $localStorage['ClipboardService'];
        })();
        return {
          add: function (type, item) {
            if (_.isUndefined(storage[type])) {
                storage[type] = [];
            }
              storage[type].push(item);
          },
          remove: function (type, item) {
            if (_.isUndefined(storage[type])) {
              return;
            }
            _.pull(storage[type], item);
          },
          getAll: function (type) {
            return storage[type];
          },
          size: function () {
            return _.flatten(_.values(storage)).length;
          }
        };
    };
    return ClipboardService;
});
