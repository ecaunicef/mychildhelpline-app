
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/topic-subtopic';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;

const _id = '657a9e2c2df106037ed62263'

describe("POST"+apiName+"/add-topic-subtopic", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/add-topic-subtopic")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST"+apiName+"/add-topic-subtopic", function () {
    it("returns add topic subtopic", async function () {
        try {
            const payload = {
                target: 'testing Topic-subtopic',
                parentId: null,
                desc: 'Testing',
            }
            const response = await supertest
                .post("/add-topic-subtopic")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});

describe("PUT"+apiName+"/update/"+_id, function () {
    it("returns topic subtopic update", async function () {
        try {
            const payload = {
                target: 'update testing Topic-subtopic',
                parentId: null,
                desc: 'Testing',
            }
            const response = await supertest
                .put("/update/"+_id)
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST"+apiName+"/delete-topic-subtopic", function () {
    it("returns delete topic subtopic", async function () {
        try {
            const payload = {
                id: _id
            }
            const response = await supertest
                .post("/delete-topic-subtopic")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
               .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


