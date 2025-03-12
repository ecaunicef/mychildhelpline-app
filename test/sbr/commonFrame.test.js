const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/common-frame';
const supertest = require('supertest')(baseUrl + apiName);
const expect = require("chai").expect;




describe("POST" + apiName + "/add-common-frame", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/add-common-frame")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});




describe("POST" + apiName + "/add-common-frame", function () {
    it("returns add commonframe", async function () {
        try {
            const payload = {
                "id": null,
                "snapshotId": "657aebd3911abab40fa447f8",
                "name": "Snapshot Name 2023-12-14 16:55:52 -",
                "filter": "[{}]",
                "enterpriseIds": "[\"657aebd47707f832cffd1dab\",\"657aebd47707f832cffd1dac\"]"
            };
            const response = await supertest
                .post("/add-common-frame")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
        } catch (error) {
            throw error;
        }
    });
});



describe("POST" + apiName + "/delete", function () {
    it("returns delete commnframe", async function () {
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