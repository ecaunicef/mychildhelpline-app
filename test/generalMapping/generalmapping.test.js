const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const supertest = require('supertest')(`${baseUrl}/general-mapping`);
const expect = require("chai").expect;

describe("GET /general-mapping/list", function () {
    it("get general mapping list", async function () {
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


describe("GET /general-mapping/get-survey-Questionnaire", function () {
    it("get survey Questionnaire", async function () {
        try {
            const response = await supertest
                .get("/get-survey-Questionnaire")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});