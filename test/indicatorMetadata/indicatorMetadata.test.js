
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/metadata';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;

const _id = '657a9e2c2df106037ed62263'

describe("POST"+apiName+"/add", function () {
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

describe("POST"+apiName+"/add", function () {
    it("returns add metadata", async function () {
        try {
            const payload = {
                "indicator": "6502f81955225e55c0cad203",
                "mt1": "mt1",
                "mt2": "mt2 ",
                "mt3": null,
                "mt4": null,
                "mt5": null,
                "mt6": null,
                "mt7": null,
                "mt8": null,
                "mt9": null
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

describe("PUT"+apiName+"/update/" + _id, function () {
    it("returns metadata update", async function () {
        try {
            const payload = {
                "id": _id,
                "indicator": "64e5f5ba8be15b63def4f503",
                "mt1": "mt1",
                "mt2": "mt2",
                "mt3": "mt3",
                "mt4": "mt4",
                "mt5": "mt5",
                "mt6": "mt6",
                "mt7": "mt7",
                "mt8": "mt8",
                "mt9": "mt9"
            }
            const response = await supertest
                .put("/update/"+_id)
                .send(payload)
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST"+apiName+"/delete-metadata", function () {
    it("returns delete metadata", async function () {
        try {
            const payload = {
                _id: _id
            }
            const response = await supertest
                .post("/delete-metadata")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
               .expect(200);
        } catch (error) {
            throw error;
        }
    });
});