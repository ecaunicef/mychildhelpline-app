const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const supertest = require('supertest')(`${baseUrl}/timePeriod`);
const expect = require("chai").expect;


describe("GET timePeriod/list", function () {
    it("get source list", async function () {
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
