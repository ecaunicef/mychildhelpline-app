
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/processed-mapping';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;

const _id = '657a9e2c2df106037ed62263'


describe("POST"+apiName+"/add-mapping", function () {
    it("returns add mapping", async function () {
        try {
            const payload = {
                "step1": {
                    "_id": "64e5ad606dd6ef765006d439",
                    "mappingName": "Mapping 2",
                    "sourceFilename": null,
                    "collectionName": null,
                    "fromCell": "A1",
                    "toCell": "J20"
                },
                "step2": {
                    "indicator": "Buildings",
                    "unit": "Number",
                    "subgroup": "Total",
                    "area": "MUS",
                    "timePeriodFormat": "YYYY",
                    "timePeriod": "2021",
                    "source": "Test14"
                },
                "step3": "[]",
                "step4": "[]",
                "source_file": null
            }
            const response = await supertest
                .post("/add-mapping")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST"+apiName+"/add-mapping", function () {
    it("returns update mapping", async function () {
        try {
            const payload = {
                "step1": {
                    "_id": "64e5ad606dd6ef765006d439",
                    "mappingName": "Mapping 2",
                    "sourceFilename": 'test',
                    "collectionName": 'test',
                    "fromCell": "A1",
                    "toCell": "J20"
                },
                "step2": {
                    "indicator": "Buildings",
                    "unit": "Number",
                    "subgroup": "Total",
                    "area": "MUS",
                    "timePeriodFormat": "YYYY",
                    "timePeriod": "2021",
                    "source": "Test14"
                },
                "step3": "[]",
                "step4": "[]",
                "source_file": 'test.csv'
            }
            const response = await supertest
                .post("/add-mapping")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST"+apiName+"/delete-mapping", function () {
    it("returns delete mapping", async function () {
        try {
            const payload = {
                "id": "6536144caf0e9514d60509ef"
            }
            const response = await supertest
                .post("/delete-mapping")
                .send(payload)
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});