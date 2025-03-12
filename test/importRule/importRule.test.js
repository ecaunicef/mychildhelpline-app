
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/manage-rule';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;

const _id = '657a9e2c2df106037ed62263'

describe("POST"+apiName+"/add-rule", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/add-rule")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST"+apiName+"/add-rule", function () {
    it("returns add rule", async function () {
        try {
            const payload = {
                "_id": null,
                "ruleName": "check",
                "dataType": "Text",
                "operator": "=",
                "values": "system_date",
                "multipleValue": false,
                "description": null
            }
            const response = await supertest
                .post("/add-rule")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST"+apiName+"/add-rule", function () {
    it("returns update rule", async function () {
        try {
            const payload = {
                "_id": "657ae02192d85bd64a6dc533",
                "ruleName": "check",
                "dataType": "Text",
                "operator": "=",
                "values": "system_date",
                "multipleValue": false
            }
            const response = await supertest
                .post("/add-rule")
                .send(payload)
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});