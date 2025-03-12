const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const supertest = require('supertest')(`${baseUrl}/topic-subtopic`);
const expect = require("chai").expect;


describe("GET /topic-subtopic/get-list", function () {
    it("get list", async function () {
        try {
            const response = await supertest
                .get("/get-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});


describe("GET /topic-subtopic/get-list-name", function () {
    it("get topic subtopic list", async function () {
        try {
            const response = await supertest
                .get("/get-list-name")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});


describe("GET /topic-subtopic/get-topic-subtopic-list", function () {
    it("get topic subtopic list", async function () {
        try {
            const response = await supertest
                .get("/get-topic-subtopic-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});


describe("GET /topic-subtopic/get-gallery-list", function () {
    it("get gallery list", async function () {
        try {
            const response = await supertest
                .get("/get-gallery-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});