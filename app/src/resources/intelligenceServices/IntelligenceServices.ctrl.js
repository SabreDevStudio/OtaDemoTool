define([], function () {

    'use strict';

    function IntelligenceServicesCtrl() {

        this.tiles = [];

        var lowFareForecast = {
            title: 'Low Fare Forecast (beta version)',
            description: 'Estimate whether the lowest published fare will rise, fall or stay the same in the next 7 days to ensure best purchase option based on historical fare prices paid.',
            widgetUrl: 'widgets.lowFareForecast',
            apis: [
                {
                    name: 'Low Fare Forecast',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/intelligence/low_fare_forecast'
                }
            ]
        };

        var fareRange = {
            title: 'Fare Range',
            description: 'Identify median, highest and lowest historical fare rates to prompt or delay purchase and secure a lower fare compared to similar published ticketed fares.',
            widgetUrl: 'widgets.fareRange',
            apis: [
                {
                    name: 'Fare Range',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/intelligence/fare_range'
                }
            ]
        };

        var lowFareHistory = {
            title: 'Low Fare History',
            description: 'Returns the past two week’s lowest published fares for a given city/date pair to calculate price trends or top destinations and create campaigns which encourage purchase.',
            widgetUrl: 'widgets.lowFareHistory',
            apis: [
                {
                    name: 'Low Fare History',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/intelligence/low_fare_history'
                }
            ]
        };

        var travelSeasonality = {
            title: 'Travel Seasonality',
            description: 'Expose peak and off peak travel periods to offer lowest fare options by destination based on historical traffic volume ratings.',
            widgetUrl: 'widgets.travelSeasonality',
            apis: [
                {
                    name: 'Travel Seasonality',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/intelligence/travel_seasonality'
                }
            ]
        };

        var fareNabber = {
            title: 'FareNabber Subscribe',
            description: 'Automate your fare alerts to identify desirable fares which accommodate the required travel parameters based on notated criteria.',
            widgetUrl: 'widgets.fareNabber',
            apis: [
                {
                    name: 'FareNabber',
                    url: 'https://developer.sabre.com/docs/read/rest_apis/air/intelligence/'
                }
            ]
        };

        this.tiles.push(lowFareForecast, fareRange, lowFareHistory, travelSeasonality, fareNabber);

    }

    return IntelligenceServicesCtrl;
});
