const confToken = require('../cons.js');
const auth = confToken.token;
const baseUrl = confToken.baseUrl;
const supertest = require('supertest');
const api = supertest(`${baseUrl}/manage-goal`);
const expect = require("chai").expect;

describe("POST /manage-goal/list", function () {
    it("sector list", async function () {
        try {
            const payload = {
                "size": 0,
                "totalElements": 0,
                "totalPages": 0,
                "pageNumber": 0,
                "filterKeyWord": "",
                "startOffset": 0,
                "endOffset": 0
            };

            const response = await api
                .post("/list")
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
