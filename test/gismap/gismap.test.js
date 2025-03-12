const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const supertest = require('supertest')( baseUrl +'/gisData');
const expect = require("chai").expect;



describe("GET /gisData/list", function () {
    it("returns get gis-map list", async function () {
        try {
            const response = await supertest
                .get("/list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});


// describe("POST /gisData/map-by-time-period", function () {
//     it("map by time period", async function () {
//         try {
//             const payload = {
//                 "selected_time": ['2015-2020']
//             };

//             const response = await supertest
//                 .post("/map-by-time-period")
//                 .send(payload)
//                 .set("Cookie", [`auth=${auth}`])
//                 .expect(200);
//         } catch (error) {
//             console.log("₱ ~ file: gismap.test.js:37 ~ error:", error)
//             throw error;
//         }
//     });

// });
