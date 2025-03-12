
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/manage-goal';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;

const _id = '657a9e2c2df106037ed62263'

describe("POST"+apiName+"/add-goal-target", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/add-goal-target")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST"+apiName+"/add-goal-target", function () {
    it("returns add goal target", async function () {
        try {
            const payload = {
                "level2_id": "64f6c92e3eda4075f6491931",
                "goals_desc": "End poverty in all its forms everywhere",
                "goal": "Goal 1",
                "target": ["target 1.2: by 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions."],
                "description": null
                
            }
            const response = await supertest
                .post("/add-goal-target")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST"+apiName+"/update-goal-target", function () {
    it("returns sector subsector update", async function () {
        try {
            const payload = {
                "id": "64f6c92eaf0e9514d68fb7d6",
                "level2_id": "64f6c92e3eda4075f6491931",
                "goals_desc": "End poverty in all its forms everywhere",
                "goal": "Goal 1",
                "target": ["target 1.2: by 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions."],
                "description": null
                
            }
            const response = await supertest
                .post("/update-goal-target")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST"+apiName+"/delete-goal-target", function () {
    it("returns delete sector subsector", async function () {
        try {
            const payload = {
                _id: _id,
                level2_id:'652920b705cb2b5458f3b8ab'
            }
            const response = await supertest
                .post("/delete-goal-target")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
               .expect(200);
        } catch (error) {
            throw error;
        }
    });
});