const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/dashboard';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;




describe("POST"+apiName+"/get-ius-by-subsector", function () {
    it("get ius by subsecto", async function () {
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
                .post("/get-ius-by-subsector")
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });

});