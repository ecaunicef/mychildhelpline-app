const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/category-master';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;


describe("GET"+apiName+"/get-file-data", function () {
    it("returns all fileData", async function () {
        try {
            const response = await supertest
                .get("/get-file-data")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});


describe("GET"+apiName+"/get-list-by-key", function () {
    it("return list by key", async function () {
        try {
            const response = await supertest
                .get("/get-list-by-key")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});


describe("GET"+apiName+"/get-file-data", function () {
    it("return list by key", async function () {
        try {
            const response = await supertest
                .get("/get-file-data")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});


describe("GET"+apiName+"/get-all-categorylist", function () {
    it("return list by key", async function () {
        try {
            const response = await supertest
                .get("/get-all-categorylist")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});
