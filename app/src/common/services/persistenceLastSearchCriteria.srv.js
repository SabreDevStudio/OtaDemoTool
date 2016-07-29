define([], function () {
    'use strict';

    return function PersistenceLastSearchCriteriaService(delegateSearchCriteriaService, SearchCriteriaSerializer, ClipboardService) {

        return {
            get: function () {
                return delegateSearchCriteriaService.get();
            },
            set: function (lastSearchCriteria) {
                var serializedSearchCriteria  = SearchCriteriaSerializer.serialize(lastSearchCriteria);
                ClipboardService.addIfAbsent('searchCriteria', serializedSearchCriteria);
                delegateSearchCriteriaService.set(lastSearchCriteria);
            }
        };
    };
});
