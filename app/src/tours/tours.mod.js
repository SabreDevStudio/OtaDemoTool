define([
    'angular',
    'tours/toursSearchPage.ctr',
    'RentAGuideWidgets.lib',
    'common/services/lastSearchCriteria.srv',
    'common/services/lastSelectedItem.srv',
    'tours/tourList.ctr',
    'tours/tourDetails.ctr'
], function (
    angular,
    ToursSearchPageCtrl,
    RentAGuideWidgets,
    LastSearchCriteriaService,
    LastSelectedItemService,
    ToursListCtrl,
    TourDetailsCtrl
) {
    'use strict';

    angular.module('otademoToolApp.tours', [])
        .service('LastToursSearchCriteriaService', LastSearchCriteriaService)
        .factory('LastSelectedTourService', LastSelectedItemService)
        .controller('ToursSearchPageCtrl', [
            '$scope',
            '$state',
            'LastToursSearchCriteriaService',
            ToursSearchPageCtrl
        ])
        .controller('ToursListCtrl', [
            '$scope',
            '$state',
            'LastToursSearchCriteriaService',
            'LastSelectedTourService',
            ToursListCtrl
        ])
        .controller('TourDetailsCtrl', [
            '$scope',
            'LastSelectedTourService',
            TourDetailsCtrl
        ])
});