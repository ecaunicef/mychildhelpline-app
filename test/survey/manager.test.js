const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/primary-plan';
const newApiName ='/survey-response'
const supertest = require('supertest')(baseUrl + apiName);
const supertest2 = require('supertest')(baseUrl + newApiName)
const expect = require("chai").expect;

describe(`GET ${apiName}/delete-plan`, function () {
    it("returns 200 given id data get deleted successfully", async function () {
        try {
            const payload={
                id:"657007adaf0e9514d6cda29c"
            }
            const response = await supertest
                .post("/delete-plan")
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});

// create primary plan

describe("GET primary-plan/add", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const payload = {
                applied_filters: null,
                description: "des",
                establishment: ["657000cfb76573fd6baf78ad", "657000cfb76573fd6baf78ae", "657000cfb76573fd6baf78af"],
                frame_type: "survey",
                frequency: "annually",
                from_date: "2023-12-14T10:54:42.014Z",
                month: null,
                name: "Survey - SEE - Govt. Questionnaire 2023-12-14 16:24:46",
                quarter: null,
                status: null,
                supplementary_frame_id: null,
                survey_frame_id: "6570014624000c1f14911d37",
                survey_id: "65671965af0e9514d6f14470",
                to_date: "2023-12-15T10:54:42.014Z",
                year: 2023,
                _id: null
            };
            const response = await supertest
                .post("/add")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});

describe("GET primary-plan/add", function () {
    it("returns 200 add plan", async function () {
        try {
            const payload = {
                applied_filters:null,
                description:"des",
                establishment: ["657000cfb76573fd6baf78ad", "657000cfb76573fd6baf78ae", "657000cfb76573fd6baf78af"],
                frame_type:"survey",
                frequency:"annually",
                from_date:"2023-12-14T10:54:42.014Z",
                month:null,
                name:"Survey - SEE - Govt. Questionnaire 2023-12-14 16:24:46",
                quarter :null,
                status : null,
                supplementary_frame_id: null,
                survey_frame_id:"6570014624000c1f14911d37",
                survey_id:"65671965af0e9514d6f14470",
                to_date:"2023-12-15T10:54:42.014Z",
                year:2023,
                _id: null
            };

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

// data-entry  survey-response/primary-add-response
describe("POST survey-response/primary-add-response", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const payload = {
                all_files: "[]",
                area_code: "",
                default_source: true,
                default_source_value: "Dummy",
                default_time_period: "2023",
                establishment_id: "65701dc69fc66c21a6ca907e",
                is_completed: 0,
                lat: "",
                long: "",
                plan_id: "65702af7af0e9514d6d07768",
                question_answer: "[{\"question_id\":\"656719a138ef972cfc0873ee\",\"options\":[{\"ans\":\"2023-12-13T18:30:00.000Z\",\"date_ans_time_period\":\"2023-12-13T18:30:00.000Z\",\"time_period\":\"2023\",\"source\":\"dummy\",\"time_period_format\":\"YYYY\"}],\"original_options\":[]}]",
                survey_id: "65671965af0e9514d6f14470"
            }
            const response = await supertest2
                .post("/primary-add-response")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});

describe("GET survey-response/primary-add-response", function () {
    it("returns 200 add data entry in survey manager", async function () {
        try {
            const payload = {
                all_files: "[]",
                area_code: "",
                default_source: true,
                default_source_value: "Dummy",
                default_time_period: "2023",
                establishment_id: "65701dc69fc66c21a6ca907e",
                is_completed: 0,
                lat: "",
                long: "",
                plan_id: "65702af7af0e9514d6d07768",
                question_answer: "[{\"question_id\":\"656719a138ef972cfc0873ee\",\"options\":[{\"ans\":\"2023-12-13T18:30:00.000Z\",\"date_ans_time_period\":\"2023-12-13T18:30:00.000Z\",\"time_period\":\"2023\",\"source\":\"dummy\",\"time_period_format\":\"YYYY\"}],\"original_options\":[]}]",
                survey_id: "65671965af0e9514d6f14470"
            }

            const response = await supertest2
                .post("/primary-add-response")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});









