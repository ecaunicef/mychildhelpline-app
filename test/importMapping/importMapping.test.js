
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/general-mapping';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;

const _id = '657a9e2c2df106037ed62263'


describe("POST"+apiName+"/add-mapping", function () {
    it("returns add mapping", async function () {
        try {
            const payload = {
                "mapping_name": "Importing Survey Data - SEE Govt",
                "target_dataset": "02. SEE Annual Questionnaire - Government",
                "column_list": "[{\"target\":\"Business Registration Number\",\"source\":\"b\",\"rules\":null,\"unique\":null,\"mandatory\":true,\"has_expression\":false,\"has_static_text\":false,\"has_aggregate\":false,\"aggregate\":{\"collection\":\"enterprise\"}},{\"target\":\"Registered name of enterprise/employer\",\"source\":\"d\",\"rules\":null,\"unique\":null,\"mandatory\":true,\"has_expression\":false,\"has_static_text\":false,\"has_aggregate\":false,\"aggregate\":{\"collection\":\"enterprise\"}},{\"target\":\"Establishment Unique Identifier\",\"source\":\"c\",\"rules\":null,\"unique\":null,\"mandatory\":false,\"has_expression\":false,\"has_static_text\":false,\"has_aggregate\":false,\"aggregate\":{\"collection\":\"enterprise\"}},{\"target\":\"Main Activity (NSIC Code and Description)\",\"source\":\"h\",\"rules\":null,\"unique\":null,\"mandatory\":false,\"has_expression\":false,\"has_static_text\":false,\"has_aggregate\":false,\"aggregate\":{\"collection\":\"enterprise\"}}]",
                "target_type": "Survey Questionnaire",
                "update_column_list": "[]",
                "type": 1
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
                "id": "6576f3c797c541f3dc048d2c",
                "mapping_name": "Importing Survey Data - SEE Govt",
                "target_dataset": "02. SEE Annual Questionnaire - Government",
                "column_list": "[{\"target\":\"Business Registration Number\",\"source\":\"b\",\"rules\":null,\"unique\":null,\"mandatory\":true,\"has_expression\":false,\"has_static_text\":false,\"has_aggregate\":false,\"aggregate\":{\"collection\":\"enterprise\"}},{\"target\":\"Registered name of enterprise/employer\",\"source\":\"d\",\"rules\":null,\"unique\":null,\"mandatory\":true,\"has_expression\":false,\"has_static_text\":false,\"has_aggregate\":false,\"aggregate\":{\"collection\":\"enterprise\"}},{\"target\":\"Establishment Unique Identifier\",\"source\":\"c\",\"rules\":null,\"unique\":null,\"mandatory\":false,\"has_expression\":false,\"has_static_text\":false,\"has_aggregate\":false,\"aggregate\":{\"collection\":\"enterprise\"}},{\"target\":\"Main Activity (NSIC Code and Description)\",\"source\":\"h\",\"rules\":null,\"unique\":null,\"mandatory\":false,\"has_expression\":false,\"has_static_text\":false,\"has_aggregate\":false,\"aggregate\":{\"collection\":\"enterprise\"}}]",
                "target_type": "Survey Questionnaire",
                "update_column_list": "[]",
                "type": 1
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


describe("POST"+apiName+"/delete", function () {
    it("returns delete mapping", async function () {
        try {
            const payload = {
                "id": "6576f16597c541f3dc046801"
            }
            const response = await supertest
                .post("/delete")
                .send(payload)
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});