const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/area';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;


const _id = '657a9e2c2df106037ed62263'

describe("POST"+apiName+"/add-area", function () {
    it("returns add area", async function () {
        try {
            const payload = {
              "areaCode": "sds",
               "areaGroup": null,
               "areaName": "dsd",
                "level": 2,
               "parentId": "MUS",
               "status": true,
            }
            const response = await supertest
                .post("/add-area")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});
describe("PUT"+apiName+"/update-area/"+_id, function () {
    it("returns data entry approve", async function () {
        try {
            const payload = {
                "areaCode": "sds",
               "areaGroup": null,
               "areaName": "dsd",
                "level": 2,
               "parentId": "MUS",
               "status": true,
            }
            const response = await supertest
                .put("/update-area/"+_id)
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
               .expect(200);
        } catch (error) {
            throw error;
        }
    });
});
describe("POST"+apiName+"/delete-area", function () {
    it("returns delete area", async function () {
        try {
            const payload = {
                "areaCode": "sds",
                "areaGroup": null,
                "areaName": "dsd",
                 "level": 2,
                "parentId": "MUS",
                "status": true,
            }
            const response = await supertest
                .post("/delete-area")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST"+apiName+"/delete-area-by-area-code-associate-check", function () {
    it("returns delete area by area code associate check", async function () {
        try {
            const payload = {
                "areaCode": "sds",
                "areaGroup": null,
                "areaName": "dsd",
                 "level": 2,
                "parentId": "MUS",
                "status": true,
            }
            const response = await supertest
                .post("/delete-area-by-area-code-associate-check")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});

