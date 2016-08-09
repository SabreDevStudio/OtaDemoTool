define([
    'angular',
    'tours/toursSearchPage.ctr',
    'RentAGuideWidgets.lib',
    'common/services/lastSearchCriteria.srv',
    'tours/toursResultPage.ctr'
], function (
    angular,
    ToursSearchPageCtrl,
    RentAGuideWidgets,
    LastSearchCriteriaService,
    ToursResultPageCtrl
) {
    'use strict';

    angular.module('otademoToolApp.tours', [])
        .service('LastToursSearchCriteriaService', LastSearchCriteriaService)
        .controller('ToursSearchPageCtrl', [
            '$scope',
            '$state',
            'LastToursSearchCriteriaService',
            ToursSearchPageCtrl
        ])
        .controller('ToursResultPageCtrl', [
            '$scope',
            '$state',
            'LastToursSearchCriteriaService',
            ToursResultPageCtrl
        ]);
});