const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/resources';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;




describe("GET"+apiName+"/get-all-resources", function () {
    it("returns role permission", async function () {
        try {
            const response = await supertest
                .get("/get-all-resources")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});

describe("GET"+apiName+"/category-lists", function () {
    it("returns role permission", async function () {
        try {
            const response = await supertest
                .get("/category-lists")
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});