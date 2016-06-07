define([], function () {
    'use strict';

    return function ArrayUtils() {
        return {
            generateSequence: function (start, end) {
                var sequence = [];
                for (var i = start; i <= end; i++) {
                    sequence.push(i);
                }
                return sequence;
            }
        };
    };
});
