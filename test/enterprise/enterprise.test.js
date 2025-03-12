
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const supertest = require('supertest')( baseUrl +'/enterprise');
const expect = require("chai").expect;

describe("GET /enterprise/get-list", function () {
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


describe("GET /enterprise/get-list", function () {
    it("returns all enterprise", async function () {
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


describe("GET /enterprise/get-mappings", function () {
    it("returns all mapping", async function () {
        try {
            const response = await supertest
                .get("/get-mappings")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});

describe("GET /enterprise/get-precedence-data", function () {
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


