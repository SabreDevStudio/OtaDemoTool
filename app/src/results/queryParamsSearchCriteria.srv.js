define([], function () {
    'use strict';

    function QueryParamsSearchCriteriaService(delegateSearchCriteriaService, queryParams, SearchCriteriaSerializer, ClipboardService) {
        return {
            get: function () {

                var searchCriteria = SearchCriteriaSerializer.deserialize({
                    origin:  queryParams.origin,
                    destination:  queryParams.destination,
                    outboundDepartureDateTime: queryParams.outboundDepartureDateTime,
                    inboundDepartureDateTime: queryParams.inboundDepartureDateTime
                });

                delegateSearchCriteriaService.set(searchCriteria);
                var serializedSearchCriteria  = SearchCriteriaSerializer.serialize(searchCriteria);
                ClipboardService.addIfAbsent('searchCriteria', serializedSearchCriteria);

                return delegateSearchCriteriaService.get();
            },
            set: delegateSearchCriteriaService.set
        };
    }
    return QueryParamsSearchCriteriaService;
});
