define([], function () {
  'use strict';

    CreateReservationCtrl.$inject = ['$scope', 'calendarModel', 'LastSelectedItineraryService', '$state'];
    function CreateReservationCtrl(
        $scope,
        calendarModel,
        LastSelectedItineraryService,
        $state
        ) {
        $scope.$state = $state;

        $scope.selectedItinerary = LastSelectedItineraryService.get();

        $scope.calendarModel = calendarModel.generate(1940, 2015);

        $scope.reservationData = initializeEmptyReservationData();

        $scope.policyConfirmed = true;

        $scope.paymentCompleteCallback = function (paymentData) {
            $scope.reservationData.paymentData = paymentData;
            var reservationData = $scope.reservationData;
            reservationData.travellerData.travellerDateOfBirth = new Date(reservationData.travellerData.travellerDateOfBirth.year, reservationData.travellerData.travellerDateOfBirth.month, reservationData.travellerData.travellerDateOfBirth.day);
            $state.go('reservationConfirmation', {
                  reservationData: reservationData,
                  itinerary: $scope.selectedItinerary
            });
          };

        $scope.optionalServicesCheckoutComplete = function () {
            $state.go('createReservation.travellerDataInput');
        };

        $scope.travellerDataInputComplete = function () {
            $state.go('createReservation.paymentDetailsInput');
        };

        function initializeEmptyReservationData() {
            var travellerData = {
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
            };

            var buyerContactData = {
                phoneNumber: {
                    prefix: undefined
                    , number: undefined
                }
                , email: undefined
            };

            var ancillaries = {
                insurance: {
                    included: false,
                    protectionPlan: 'Full protection',
                    price: 30.00,
                    currency: 'EUR'
                },
                car: {
                    carSelected: undefined,
                    pickupLocation: undefined,
                    pickupDateTime: undefined,
                    returnDateTime: undefined
                }
            };

            return {
                travellerData: travellerData,
                paymentData: {},
                buyerContactData: buyerContactData,
                ancillaries: ancillaries
            };
        }

        }
    return CreateReservationCtrl;
});
