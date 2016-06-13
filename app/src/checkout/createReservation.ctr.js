define([], function () {
  'use strict';

    CreateReservationCtrl.$inject = ['calendarModel', 'LastSelectedItineraryService', '$state'];
    function CreateReservationCtrl(
        calendarModel,
        LastSelectedItineraryService,
        $state
        ) {
          this.selectedItinerary = LastSelectedItineraryService.get();

          this.calendarModel = calendarModel.generate(1940, 2015);

          // presets
          this.reservationData = {
              travellerData: {
                    travellerFirstName: undefined
                  , travellerMiddleName: undefined
                  , travellerLastName: undefined
                  , travellerGender: 'M'
                  , travellerDateOfBirth: {
                        day: undefined
                      , month: undefined
                      , year: undefined
                  }
                  , frequentFlyerProgram: {
                        programName: undefined
                      , number: undefined
                  }
                  , travellerContact: {
                        phoneNumber: {
                            prefix: undefined
                          , number: undefined
                        }
                  }
                  , preferredSeatType: undefined
                  , specialServiceRequest: {
                      mealPreference: undefined,
                      assistanceType: undefined
                  }
              },
              paymentData: {},
              buyerContactData: {
                  phoneNumber: {
                        prefix: undefined
                      , number: undefined
                  }
                  , email: undefined
              }
          };

          this.onTryToUncheckPolicyConfirmation = function (ev) {
              ev.preventDefault();
              ev.stopPropagation();
              //TODO invalidate form state and present small message in danger: 'Cannot make reservation without accepting booking policy'], 'Error'
          };

          this.insuranceIncluded = false;

          var that = this;
          this.commitReservation = function () {
              var reservationData = that.reservationData;
              reservationData.travellerData.travellerDateOfBirth = new Date(reservationData.travellerData.travellerDateOfBirth.year, reservationData.travellerData.travellerDateOfBirth.month, reservationData.travellerData.travellerDateOfBirth.day);
              $state.go('reservationConfirmation', {
                  reservationData: reservationData,
                  itinerary: that.selectedItinerary
              });
          }

        }
    return CreateReservationCtrl;
});
