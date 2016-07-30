define([
    'lodash'
], function (_) {
    'use strict';

    // WARN: with underlying delegate array-like implementation decorates with LRU behaviour. But not guaranteed LRU (access timestamps not stored).
    // While adding just remove first items from array to make room for new items if max capacity achieved.
    function ClipboardLRUServiceDecorator(delegate, maxCapacityPerType) {
        function trimIfTooLarge(type) {
            if (delegate.size(type) >= maxCapacityPerType) {
                delegate.removeAt(type, 0);
            }
        }
        return _.extend({}, delegate, {
            add: function (type, item) {
                trimIfTooLarge(type);
                delegate.add(type, item);
            },
            addIfAbsent: function (type, item) {
                if (delegate.contains(type, item)) {
                    return;
                }
                trimIfTooLarge(type);
                delegate.addIfAbsent(type, item);
            }
        });
    }
    return ClipboardLRUServiceDecorator;
});
