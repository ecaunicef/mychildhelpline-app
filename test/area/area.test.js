const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const supertest = require('supertest')( baseUrl +'/area');
const expect = require("chai").expect;



describe("GET /area/get-area-data", function () {
    it("returns get area ", async function () {
        try {
            const response = await supertest
                .get("/get-area-data")
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});

describe("GET /area/getAreaDataForUsers", function () {
    it("returns area data for users", async function () {
        try {
            const response = await supertest
                .get("/getAreaDataForUsers")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});

describe("GET /area/getAreaDataSort", function () {
    it("returns area data sort", async function () {
        try {
            const response = await supertest
                .get("/getAreaDataSort")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
})

describe("GET /area/getdistrictAreaDataSort", function () {
    it("returns area district data sort", async function () {
        try {
            const response = await supertest
                .get("/getdistrictAreaDataSort")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
})

describe("GET /area/get-area-list", function () {
    it("returns area list", async function () {
        try {
            const response = await supertest
                .get("/get-area-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
})


