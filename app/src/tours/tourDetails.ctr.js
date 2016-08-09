define([], function () {
    'use strict';

    function TourDetailsCtrl($scope, LastSelectedTourService) {
        var lastSelectedTour = LastSelectedTourService.get();
        $scope.tourId = lastSelectedTour.id;
    }
    return TourDetailsCtrl;
});
