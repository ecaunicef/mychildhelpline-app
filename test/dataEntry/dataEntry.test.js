
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/data';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;

const _id = '657a9e2c2df106037ed62263'

describe("POST"+apiName+"/add-data", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/add-data")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST"+apiName+"/add-data", function () {
    it("returns add data entry", async function () {
        try {
            const payload = {
                "iu_id": "6502f81955225e55c0cad203",
                "ius_id": "6502f81955225e55c0cad20c",
                "unit": "Degree",
                "indicator": "Annual change in Producer Price Index",
                "source": "Based on 2013 CEA",
                "value": 5,
                "area": "MUS001004",
                "time_period": "1968",
                "footnote": "Footnote"
            }
            const response = await supertest
                .post("/add-data")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST"+apiName+"/update-data", function () {
    it("returns data entry update", async function () {
        try {
            const payload = {
                "id": "652fe514af0e9514d6736a08",
                "iu_id": "652fe2e99c97d8337f5f8b4c",
                "ius_id": "652fe2e99c97d8337f5f8b4d",
                "unit": "Hectare",
                "indicator": "Area harvested for sugarcane",
                "source": "Dummy",
                "value": "0",
                "area": "MUS001",
                "time_period": "2023"
            }
            const response = await supertest
                .post("/update-data")
                .send(payload)
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST"+apiName+"/delete-data", function () {
    it("returns delete data entry", async function () {
        try {
            const payload = {
                data: _id
            }
            const response = await supertest
                .post("/delete-data")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
               .expect(200);
        } catch (error) {
            throw error;
        }
    });
});
// data approve ---------
describe("PUT"+apiName+"/approvedata/"+_id, function () {
    it("returns data entry approve", async function () {
        try {
            const payload = {
                "value": 1,
                "status": 1
            }
            const response = await supertest
                .put("/approvedata/"+_id)
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
               .expect(200);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST"+apiName+"/reject-row-data-approve", function () {
    it("returns data entry reject", async function () {
        try {
            const payload = {
                "data_id": "657aca3daf0e9514d6a4f92b",
                "status": 3,
                "remark": " "
            }
            const response = await supertest
                .post("/reject-row-data-approve")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
               .expect(200);
        } catch (error) {
            throw error;
        }
    });
});