const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/role-permission';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;

describe("GET"+apiName+"/list", function () {
    it("returns role permission", async function () {
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

describe("GET"+apiName+"/getFiles", function () {
    it("returns role permission", async function () {
        try {
            const response = await supertest
                .get("/getFiles")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});



