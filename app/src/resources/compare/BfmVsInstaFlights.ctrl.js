define([], function () {

    'use strict';
    
    function BfmVsInstaFlights(shoppingProfileService) {

        this.shoppingProfiles = shoppingProfileService.getShoppingProfies(true);

        this.selectedProfile = this.shoppingProfiles[0];
    }

    return BfmVsInstaFlights;
});