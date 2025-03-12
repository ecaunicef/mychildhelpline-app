const confToken = require('../cons')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const supertest = require('supertest')(baseUrl + '/primary-plan');
const expect = require("chai").expect;


describe("GET primary-plan/get-plans-by-surveyid", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/get-plans-by-surveyid")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});


describe("GET primary-plan/get-plans-by-surveyid", function () {
    it("returns 200 if get data of given survey_id and status code", async function () {
        try {
            const payload = {
                status:1,
                survey_id: "65671965af0e9514d6f14470"
            };

            const response = await supertest
                .post("/get-plans-by-surveyid")
                .set("Cookie", [`auth=${auth}`])
                .send(payload) 
                .expect(200);

            // expect(response.body).to.have.property('data').that.is.an('array').with.length.greaterThan(0);
        } catch (error) {
            throw error;
        }
    });
});


describe("GET primary-plan/get-view-by-planid", function () {
    it("returns 200 if get data of given id", async function () {
        try {
            const response = await supertest
                .get("/get-view-by-planid/657a961bc60b82098da063f9")
                .expect(200);
                // .expect(response.body).to.have.property('plan').that.is.an('array').with.length.greaterThan(0);
           
        } catch (error) {
            throw error;
        }
    });
});


describe("POST primary-plan/get-data-entry-questionlist", function () {
    it("returns 200 if get question list of given survey", async function () {
        try {
            const payload = {
                establishment_id:"657000cfb76573fd6baf78ad",
                plan_id :"657a961bc60b82098da063f9",
                survey_id:"657a95a3c60b82098da06396"
            };

            const response = await supertest
                .post("/get-data-entry-questionlist")
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});

describe("GET primary-plan/get-data-summary-by-planid", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .get("/get-data-summary-by-planid/657a961bc60b82098da063f9")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});

describe("GET primary-plan/get-data-summary-by-planid", function () {
    it("returns 200 if we get data", async function () {
        try {
            const response = await supertest
                .get("/get-data-summary-by-planid/657a961bc60b82098da063f9")
                .set("Cookie", [`auth=${auth}`])
                .expect(200)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    if (!Array.isArray(res.body) && res.body.length == 0) {
                        throw new Error('data should be in an array and its length should be greater 0');
                    }
                });
        } catch (error) {
            throw error;
        }
    });
});





