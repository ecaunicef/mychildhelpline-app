const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const supertest = require('supertest')( baseUrl +'/data-exchange');
const expect = require("chai").expect;

describe("GET /data-exchange/get-mapping-list", function () {
    it("get all mapping list", async function () {
        try {
            const response = await supertest
                .get("/get-mapping-list")
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});



describe("GET /data-exchange/get-processed-import-list", function () {
    it("get processed import list", async function () {
        try {
            const response = await supertest
                .get("/get-processed-import-list")
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});