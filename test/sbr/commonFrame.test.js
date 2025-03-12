const { expect } = require('chai');
const confToken = require('../cons')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/common-frame'
const supertest = require('supertest')(baseUrl + apiName);



describe("GET" + apiName + "/get-list", function () {
    it("status 400,returns unauthorized user", async function () {
        try {
            let res = await supertest
                .get("/get-list")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});




describe("GET" + apiName + "/get-list", function () {
    it("status 200,returns list of common frame", async function () {
        try {
            let res = await supertest
                .get("/get-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});




describe("GET" + apiName + "/get-common-frame-list", function () {
    it("status 200,returns list of common frame list", async function () {
        try {
            let res = await supertest
                .get("/get-common-frame-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});
