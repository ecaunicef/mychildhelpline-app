const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/enterprise-snapshot';
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
    it("returns add snapshot", async function () {
        try {
            const payload ={
                "id": null,
                "name": "Snapshot Name 2023-12-14 16:55:52",
                "description": "snpa"
            };
            const response = await supertest
                .post("/add")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
        } catch (error) {
            throw error;
        }
    });
});



describe("POST" + apiName + "/delete", function () {
    it("returns delete snapshot", async function () {
        try {
            const payload = {
                "_id": "657ae648a4e3793818bbe157"
            };
            const response = await supertest
                .post("/delete")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
        } catch (error) {
            throw error;
        }
    });
});



