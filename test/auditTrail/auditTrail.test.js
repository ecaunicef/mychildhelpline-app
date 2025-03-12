const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/audit';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;




describe("POST"+apiName+"/list", function () {
    it(" audit list", async function () {
        try {
            const payload = {
                endOffset: 0,
                pageNumber:0,
                searchFor: "",
                size:10,
                startOffset:0,
                totalElements:0,
                totalPages:0
               
            };

            const response = await supertest
                .post("/list")
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });

});

