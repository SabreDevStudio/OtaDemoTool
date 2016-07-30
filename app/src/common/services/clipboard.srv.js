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

        function add(type, item) {
            if (_.isUndefined(storage[type])) {
                storage[type] = [];
            }
            storage[type].push(item);
        }

        function contains(type, item, comparator) {
            if (_.isUndefined(storage[type])) {
                return false;
            }
            var comparator = comparator || function (element) {
                    return _.isEqual(item, element);
                }
            return _.some(storage[type], comparator);
        }

        return {
            add: add,
            remove: function (type, item, comparator) {
                if (_.isUndefined(storage[type])) {
                    return;
                }
                var comparator = comparator || function (element) {
                        return _.isEqual(item, element);
                    };
                _.remove(storage[type], comparator);
            },
            removeAt: function (type, itemIndex, itemsToRemove) {
                var itemsToRemove = itemsToRemove || 1;
                if (_.isUndefined(storage[type])) {
                    return;
                }
                storage[type].splice(itemIndex, itemsToRemove);
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
            size: function (type) {
                if (type) {
                    return (_.isUndefined(storage[type]))? 0: storage[type].length;
                }
                return _.flatten(_.values(storage)).length || 0;
            },
            contains: contains,
            addIfAbsent: function (type, item) {
                if (!contains(type, item)) {
                    add(type, item);
                }
            }
        };
    };
    return ClipboardService;
});
