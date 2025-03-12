const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const supertest = require('supertest')( baseUrl +'/key-facts');
const expect = require("chai").expect;



describe("GET /key-facts/data", function () {
    it("returns get file data", async function () {
        try {
            const response = await supertest
                .get("/data")
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});

