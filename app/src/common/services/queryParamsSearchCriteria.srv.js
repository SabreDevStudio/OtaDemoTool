define([], function () {
    'use strict';

    function QueryParamsSearchCriteriaService(delegateSearchCriteriaService, queryParams, SearchCriteriaSerializer, InspirationalTravelDatesService) {

        function createSearchCriteria(queryParams) {
            var searchCriteriaTemplate =  {
                origin:  queryParams.origin,
                destination:  queryParams.destination
            };

            if (queryParams.outboundDepartureDateTime) {
                searchCriteriaTemplate.outboundDepartureDateTime = queryParams.outboundDepartureDateTime;
                if (queryParams.inboundDepartureDateTime) {
                    searchCriteriaTemplate.inboundDepartureDateTime = queryParams.inboundDepartureDateTime;
                }
            } else {
                const travelDates = InspirationalTravelDatesService.getTravelDates();
                searchCriteriaTemplate.outboundDepartureDateTime = travelDates.outboundDepartureDate.toISOString();
                searchCriteriaTemplate.inboundDepartureDateTime = travelDates.inboundDepartureDate.toISOString();
                searchCriteriaTemplate.altDatesPlusMinus = travelDates.altDatesPlusMinus;
            }

            var searchCriteria = SearchCriteriaSerializer.deserialize(searchCriteriaTemplate);
            return searchCriteria;
        }

        return {
            get: function () {
                var searchCriteria = createSearchCriteria(queryParams);
                delegateSearchCriteriaService.set(searchCriteria);
                return delegateSearchCriteriaService.get();
            },
            set: delegateSearchCriteriaService.set
        };
    }
    return QueryParamsSearchCriteriaService;
});
