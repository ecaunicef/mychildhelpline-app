
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/establishment';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;


describe("GET"+apiName+"/get-list", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .get("/get-list")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});


describe("GET"+apiName+"/get-list", function () {
    it("returns all establishment", async function () {
        try {
            const response = await supertest
                .get("/get-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});


describe("GET"+apiName+"/get-precedence-data", function () {
    it("returns all precedence", async function () {
        try {
            const response = await supertest
                .get("/get-precedence-data")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});


