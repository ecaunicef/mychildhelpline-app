
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/resources';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;
const path = require('path');


describe("POST /resources/add-resource", function () {
    it("uploads a file with multipart form data from resource", async function () {

        try {
            const imageFileName = '20231213_16322_Screenshot from 2023-12-12 10-27-47.png';
            const documentFileName = '20231213_16322_P7.xlsx';
            const filePath = path.join('https://via.placeholder.com/150/FF0000/FFFFFF?Text=yttags.com');
            const docFilePath = path.join('https://docs.google.com/spreadsheets/d/1juzkH3_ipq6KQZon0ch2QdAioAOOrKZleu6YGnMGKGs/edit#gid=0');
            const response = await supertest
                .post("/add-resource")
                .field("title", "this is title from unit test script")
                .field("description", "description value unit test script")
                .field("url", "https://www.google.com")
                .field("type", "Document")
                .field("category", "Quick Links")
                // .attach('image',filePath)
                // .attach("doc", docFilePath)
                .set("Cookie", `auth=${auth}`)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });

});



describe("POST /resources/update/652cd997032350147c94b909", function () {
    it("update a file with multipart form data from resource", async function () {

        try {
            const imageFileName = '20231213_16322_Screenshot from 2023-12-12 10-27-47.png';
            const documentFileName = '20231213_16322_P7.xlsx';
            const filePath = path.join('https://via.placeholder.com/150/FF0000/FFFFFF?Text=yttags.com');
            const docFilePath = path.join('https://docs.google.com/spreadsheets/d/1juzkH3_ipq6KQZon0ch2QdAioAOOrKZleu6YGnMGKGs/edit#gid=0');
            const response = await supertest
                .post("/update/652cd997032350147c94b909")
                .field("title", "this is title unit test script")
                .field("description", "description value unit test script")
                .field("url", "https://www.google.com")
                .field("type", "Document")
                .field("category", "Quick Links")
                // .attach('image',filePath)
                // .attach("doc", docFilePath)
                .set("Cookie", `auth=${auth}`)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });

});

describe("POST /resources/delete-resource", function () {
    it("delete a file with multipart form data from resource", async function () {
        try {
            const payload = {
                "id": "657af86ac74a1785f81ca6f0"
            };

            const response = await supertest
                .post("/delete-resource")
                .send(payload)
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});