
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/key-facts';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;

const _id = '657a9e2c2df106037ed62263'

describe("POST"+apiName+"/add-keyfacts", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/add-keyfacts")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST"+apiName+"/add-keyfacts", function () {
    it("returns add key facts", async function () {
        try {
            const payload = {
                "id": null,
                "indicator": "64e5f5bb8be15b63def4f5c1",
                "subgroup": "64e5f5bbea7f97ef827e8064"
            }
            const response = await supertest
                .post("/add-keyfacts")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});

describe("PUT"+apiName+"/update-keyfacts/"+_id, function () {
    it("returns update key facts", async function () {
        try {
            const payload = {
                "id": "6528dbe8bbc06d6d773931f0",
                "indicator": "64e5f5c38be15b63def4faa2",
                "subgroup": "64e5f5c3ea7f97ef827e8b6f"
            }
            const response = await supertest
                .put("/update-keyfacts/"+_id)
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});



describe("POST"+apiName+"/delete-key-facts", function () {
    it("returns delete key facts", async function () {
        try {
            const payload = {
                id: _id,
            }
            const response = await supertest
                .post("/delete-key-facts")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
               .expect(200);
        } catch (error) {
            throw error;
        }
    });
});