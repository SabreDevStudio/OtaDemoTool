define([], function () {
  'use strict';

    CreateReservationCtrl.$inject = ['ArrayUtils', '$locale', '$window', 'LastSelectedItineraryService'];
    function CreateReservationCtrl(
        ArrayUtils,
        $locale,
        $window,
        LastSelectedItineraryService
        ) {
          this.selectedItinerary = LastSelectedItineraryService.get();

          this.baggageAndOptionalChargesLinkClicked = function () {
              $window.open("views-static/baggageAndOptionalCharges.html");
          };

          this.calendarModel = {};
          this.calendarModel.years = ArrayUtils.generateSequence(1940, 2015);
          this.calendarModel.months = $locale.DATETIME_FORMATS.SHORTMONTH;
          this.calendarModel.monthDays = ArrayUtils.generateSequence(1, 31);

          this.addressModel = {};
          this.addressModel.countries = {
              "PL": {
                  "name": "Poland",
                  "iso2": "PL",
                  "code": "48"
              },
              "DE": {
                  "name": "Germany",
                  "iso2": "DE",
                  "code": "49"
              },
              "AT": {
                  "name": "Austria",
                  "iso2": "AT",
                  "code": "43"
              },
              "US": {
                  "name": "United States",
                  "iso2": "US",
                  "code": "1"
              },
              "GB": {
                  "name": "United Kingdom",
                  "iso2": "GB",
                  "code": "1 473"
              }
          };

          this.ancilliaryModel = {};
          this.ancilliaryModel.seatTypes = ['Any Seat', 'Aisle Seat', 'Window Seat'];

          this.ancilliaryModel.airlinesFrequentFlyerPrograms = [ // : dropdown at Expd page + number input program number
              {
                  airlineCode: 'LH',
                  programName: 'Miles&More'
              },
              {
                  airlineCode: 'AA',
                  programName: 'AAdvantage'
              },
              {
                  airlineCode: 'AF',
                  programName: 'Flying Blue'
              },
              {
                  airlineCode: 'BA',
                  programName: 'Executive Club'
              }
          ];

          this.paymentModel = {
              creditCardCompanies: ['Visa', 'MasterCard', 'AmericanExpress', 'Maestro', 'Discover', 'JCB']
          };

          this.specialServiceRequest = {};
          this.specialServiceRequest.assistanceTypes = ['None', 'Blind', 'Deaf', 'Wheelchair'];
          this.specialServiceRequest.mealPreferenceTypes = ['No preference', 'Vegetarian', 'Child', 'Diabetic', 'Gluten-intolerant', 'Low fat', 'Kosher'];

          // presets
          this.reservationData = {
              travellerData: {
                    travellerFirstName: undefined
                  , travellerMiddleName: undefined
                  , travellerLastName: undefined
                  , travellerGender: 'F'
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
                  , preferredSeatType: this.ancilliaryModel.seatTypes[0]
                  , specialServiceRequest: {
                      mealPreference: this.specialServiceRequest.mealPreferenceTypes[0],
                      assistanceType: this.specialServiceRequest.assistanceTypes[0]
                  }
              },
              paymentData: {
                  creditCard: {
                        creditCardCompany: this.paymentModel.creditCardCompanies[0]
                      , expiry: {
                            year: undefined
                          , month: undefined
                      }
                      , securityCode: undefined
                      , ownerFullName: undefined
                  }
                  , voucherCode: undefined
              },
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

          this.commitReservation = function () {
              console.log(this.reservationData);
          }
        }
    return CreateReservationCtrl;
});
