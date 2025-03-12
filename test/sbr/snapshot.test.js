const { expect } = require('chai');
const confToken = require('../cons')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName ='/enterprise-snapshot'
const supertest = require('supertest')(baseUrl + apiName);

describe("GET"+ apiName+"/get-list", function () {
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
    it("status 200,returns list of enterprise snapshot", async function () {
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



describe("GET" + apiName + "/get-snapshot-list", function () {
    it("status 200,returns list of enterprise snapshot", async function () {
        try {
            let res = await supertest
                .get("/get-snapshot-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});



describe("GET" + apiName + "/get-enterprise-list-by-snapshot-id2", function () {
    it("status 200,returns list of enterprise snapshot by id2", async function () {
        try {
            let res = await supertest
                .get("/get-enterprise-list-by-snapshot-id2")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


