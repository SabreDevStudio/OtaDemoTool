define([], function () {
    'use strict';

    return function LastSearchCriteriaService() {
        var _lastSearchCriteria;
        return {
            get: function () {
                return _lastSearchCriteria;
            },
            set: function (lastSearchCriteria) {
                _lastSearchCriteria = lastSearchCriteria;
            }
        };
    };
});
