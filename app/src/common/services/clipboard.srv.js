define([
    'lodash'
], function (_) {
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
            remove: function (type, item, comparator) {
                if (_.isUndefined(storage[type])) {
                    return;
                }
                var comparator = comparator || function (element) {
                        return _.isEqual(item, element);
                    };
                _.remove(storage[type], comparator);
            },
            removeAll: function (type) {
                if (_.isUndefined(storage[type])) {
                    return;
                }
                storage[type] = [];
            },
            getAll: function (type) {
                return storage[type] || [];
            },
            size: function () {
                return _.flatten(_.values(storage)).length || 0;
            },
            contains: function (type, item, comparator) {
                if (_.isUndefined(storage[type])) {
                    return false;
                }
                var comparator = comparator || function (element) {
                        return _.isEqual(item, element);
                }
                return _.some(storage[type], comparator);
            }
        };
    };
    return ClipboardService;
});
