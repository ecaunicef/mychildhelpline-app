
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/manage-sector';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;

const _id = '657a9e2c2df106037ed62263'

describe("POST"+apiName+"/add-sector-subsector", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/add-sector-subsector")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST"+apiName+"/add-sector-subsector", function () {
    it("returns add sector subsector", async function () {
        try {
            const payload = {
                    "level2_id": "652920b705cb2b5458f3b8ab",
                    "topic_desc": "The textile and garment sector contributes to nearly 80% of total EPZ exports. Revenue generated from this sector amounted to.",
                    "topic": "testing textiles",
                    "subtopic": ["Spinning"],
                    "description": null
                
            }
            const response = await supertest
                .post("/add-sector-subsector")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});



describe("POST"+apiName+"/update-sector-subsector", function () {
    it("returns sector subsector update", async function () {
        try {
            const payload = {
                topic_id:'652920b705cb2b5458f3b8ab',
                "level2_id": "652920b705cb2b5458f3b8ab",
                "topic_desc": "The textile and garment sector contributes to nearly 80% of total EPZ exports. Revenue generated from this sector amounted to.",
                "topic": "update textiles",
                "subtopic": ["Spinning"],
            }
            const response = await supertest
                .post("/update-sector-subsector")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST"+apiName+"/delete-sector-subsector", function () {
    it("returns delete sector subsector", async function () {
        try {
            const payload = {
                _id: _id,
                level2_id:'652920b705cb2b5458f3b8ab'
            }
            const response = await supertest
                .post("/delete-sector-subsector")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
               .expect(200);
        } catch (error) {
            throw error;
        }
    });
});