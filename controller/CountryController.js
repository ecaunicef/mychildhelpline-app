const Country = require('../model/country');
const db=require('../model/db');
const env = require('../config/env.js')
const axios = require('axios');

const { JSDOM } = require('jsdom');
const dom = new JSDOM();

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

// Now you can safely use navigator
var edge = 'msLaunchUri' in navigator && !('documentMode' in document);
const L = require('leaflet');

var fs = require('fs')
    , es = require('event-stream');

// import * as L from 'leaflet';

let countryController = {
    getLocationData: async function(req, res) {
        try {
            const latitude = req.body.latitude
            const longitude = req.body.longitude
            
            const keyPath = env.APP_URL;
            const contantPath = env.constantFilePath
            // const credentials = JSON.parse(fs.readFileSync(keyPath));
            const encodedCredentials = encodeURIComponent(keyPath);
            // var map = L.map('map');

            axios.get(keyPath+"constantfile/world_2006.json")
            .then(response => {
                const geojsonData = response.data;  // Axios response data

                var geoJsonLayer = L.geoJSON(geojsonData)
                var clickedFeature = null;
                var countryDetail = {}

                var userLat = latitude;
                var userLon = longitude;

                // var userLat = 18.2232706;
                // var userLon = -63.0566336;

                // Virgin Island UK
                const aa = {lat: userLat, lng: userLon}
                console.log(aa)


                // Add a marker for the user's location
                const marker = L.marker([userLat, userLon])
                                
                geoJsonLayer.eachLayer(function(layer) {
                    if (layer.getBounds && layer.getBounds().contains(aa)) {
                        clickedFeature = layer.feature;
                    } else if (layer.getLatLng && marker.getLatLng().equals(aa)) {
                        clickedFeature = layer.feature;
                    }
                });

                // console.log(clickedFeature)

                const country_code = clickedFeature.properties.NAME2_
                // console.log(country_code)
                countryDetail['country_code'] = country_code
                countryDetail['country_name'] = clickedFeature.properties.NAME1_

                // go into level 2
                if(country_code != undefined) {
                    if(fs.existsSync(contantPath+"/"+country_code+".json")){
                        axios.get(keyPath+"constantfile/"+country_code+".json")
                        .then(response => {
                            const geojsonData = response.data;  // Axios response data

                            var geoJsonLayer = L.geoJSON(geojsonData)
                            var clickedFeature2 = null;

                            var userLat = latitude;
                            var userLon = longitude;

                            // var userLat = 18.2232706;
                            // var userLon = -63.0566336;

                            // Virgin Island UK
                            const aa = {lat: userLat, lng: userLon}
                            // console.log("bb", aa)


                            // Add a marker for the user's location
                            const marker = L.marker([userLat, userLon])
                                            
                            geoJsonLayer.eachLayer(function(layer) {
                                if (layer.getBounds && layer.getBounds().contains(aa)) {
                                    clickedFeature2 = layer.feature;
                                } else if (layer.getLatLng && marker.getLatLng().equals(aa)) {
                                    clickedFeature2 = layer.feature;
                                }
                            });

                            // console.log("111", clickedFeature)

                            countryDetail['district_code'] = clickedFeature2.properties.id
                            countryDetail['district_name'] = clickedFeature2.properties.name

                            // const country_code = clickedFeature.properties.NAME2_
                            // console.log(countryDetail)

                            // go into level 2
                            

                            // res.send(clickedFeature)

                            res.send(countryDetail)
                        })
                    } else {
                        // console.log("file not exists")
                        res.send('failed')
                    }
                    // return
                    
                }

                
            })
            .catch(error => {
                res.send('failed')
                // console.error('Error fetching GeoJSON data:', error);  // Handle error
            });
        } catch (error) {
            // console.log("14", error)
            res.send(error)
        }
    }
};

module.exports = countryController; 
