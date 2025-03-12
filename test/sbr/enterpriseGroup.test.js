const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/enterprise-group';
const supertest = require('supertest')(baseUrl + apiName);
const expect = require("chai").expect;



describe("POST" + apiName + "/add", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/add")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST" + apiName + "/add", function () {
    it("returns  add enterprise group element", async function () {
        try {
            let payload={
                "id": null,
                "name": "Enterprise group",
                "remarkText": "des"
            }
            const response = await supertest
                .post("/add")
                .expect(200)
                .set("Cookie", [`auth=${auth}`])
                .send(payload);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST" + apiName + "/update", function () {
    it("returns update enterprise group with given id", async function () {
        try {
            let payload = {
                "id": "656fb8309dbf25ef96740b34",
                "name": "one",
                "remarkText": "dec"
            }
            const response = await supertest
                .post("/update")
                .expect(200)
                .set("Cookie", [`auth=${auth}`])
                .send(payload);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST" + apiName + "/delete", function () {
    it("returns delete enterprise group with given id", async function () {
        try {
            let payload = {
                "_id": "656fb8309dbf25ef96740b34"
            }
            const response = await supertest
                .post("/delete")
                .expect(200)
                .set("Cookie", [`auth=${auth}`])
                .send(payload);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST" + apiName + "/status-update-enterprisegroup", function () {
    it("status update of given enterprise group", async function () {
        try {
            const payload = {
                "_id": "656fb8309dbf25ef96740b34",
                "status": 1
            };
            const response = await supertest
                .post("/status-update-enterprisegroup")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
        } catch (error) {
            throw error;
        }
    });
});


