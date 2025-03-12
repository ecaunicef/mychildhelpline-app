const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const supertest = require('supertest')(`${baseUrl}/enterprise-group`);
const expect = require("chai").expect;

describe("GET /enterprise-group/get-list", function () {
    it("get list", async function () {
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


describe("GET /enterprise-group/get-active-enterprisegroup-list", function () {
    it("get list", async function () {
        try {
            const response = await supertest
                .get("/get-active-enterprisegroup-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});