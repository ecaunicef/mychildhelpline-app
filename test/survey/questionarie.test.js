const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/survey';
const supertest = require('supertest')(baseUrl + apiName);
const expect = require("chai").expect;




describe("POST" + apiName + "/add", function () {
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





describe("POST" + apiName + "/add", function () {
    it("returns add questionaries form", async function () {
        try {
            const payload = {
                "name": "suryvey",
                "description": "test",
                "status": 1
            };
            const response = await supertest
                .post("/add")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
        } catch (error) {
            throw error;
        }
    });
});



describe("PUT" + apiName + "/update/:id", function () {
    it("returns questionaries form updated", async function () {
        try {
            const payload = {
                "name": "02. SEE Annual Questionnaire - Government",
                "description": "Annual Questionnaire for ministries and ",
                "status": 1
            };
            const response = await supertest
                .put("/update/65639887af0e9514d68e9671")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});



describe("POST" + apiName + "/copy", function () {
    it("returns questionaries form copyed", async function () {
        try {
            const payload = {
                "from_survey_id": "65639887af0e9514d68e9671",
                "survey_name": "test"
            };
            const response = await supertest
                .post("/copy")
                .set("Cookie", [`auth=${auth}`])
                .expect(200)
                .send(payload);
        } catch (error) {
            throw error;
        }
    });
});




describe("POST" + apiName + "/delete-survey", function () {
    it("returns questionaries form delted", async function () {
        try {
            const payload = {
                _id: "65639887af0e9514d68e9671"
            };
            const response = await supertest
                .post("/delete-survey")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});















