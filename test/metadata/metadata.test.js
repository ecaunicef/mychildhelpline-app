const confToken = require('../cons.js');
const auth = confToken.token;
const baseUrl = confToken.baseUrl;
const supertest = require('supertest');
const api = supertest(`${baseUrl}/metadata`);
const expect = require("chai").expect;

describe("POST /metadata/get-list", function () {
    it("metadata list", async function () {
        try {
            const payload = {
            };

            const response = await api
                .post("/get-list")
                .send(payload)
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

            // console.log(response.body);
        } catch (error) {
            throw error;
        }
    });

    // it("returns 400 Bad Request with invalid data", async function () {
    //     const invalidUserData = {
    //         // Invalid data without required fields
    //     };

    //     const response = await api
    //         .post("/list")
    //         .send(invalidUserData)
    //         .set("Cookie", [`auth=${auth}`])
    //         .expect(200);

    //     // Additional assertions or checks for a 400 Bad Request response
    // });
});
