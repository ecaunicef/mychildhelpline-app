const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/supplementary-frame';
const supertest = require('supertest')(baseUrl + apiName);
const expect = require("chai").expect;


describe("POST" + apiName + "/add", function () {
    it("returns 200 add supplementry frame", async function () {
        try {
            const payload = {
                description:"",
                name:"jhbj",
                snapshotCreatedDate:"2023-12-06T11:28:56.144Z"
            };
            const response = await supertest
                .post("/add")
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST" + apiName + "/add", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/delete")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST" + apiName + "/delete", function () {
    it("returns 200 delete supplementary", async function () {
        try {
            const payload = {
                rowId: "657af7db7616370b674f42c3"
            };
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



