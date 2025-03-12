const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/category-master';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;


describe("POST"+apiName+"/add", function () {
    it("returns add category master", async function () {
        try {
            const payload = {
                cid:"vvxv",
                key: "ancillary_activity",
                list_name:"sggg"
            }
            const response = await supertest
                .post("/add")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST"+apiName+"/update", function () {
    it("returns update category master", async function () {
        try {
            const payload = {
                cid:"vvxv",
                key: "ancillary_activity",
                list_name:"sggg"
            }
            const response = await supertest
                .post("/update")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST"+apiName+"/delete", function () {
    it("returns delete category master", async function () {
        try {
            const payload = {
                cid:"vvxv",
                key: "ancillary_activity",
                list_name:"sggg"
            }
            const response = await supertest
                .post("/delete")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});

