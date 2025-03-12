
const confToken = require('../cons')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const supertest = require('supertest')(baseUrl + '/survey');
const expect = require("chai").expect;

describe("GET survey/get-list", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .get("/get-list")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});


describe("GET survey/get-list", function () {
    it("returns all survey", async function () {    
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





describe("GET survey/get-all-data-entry-user",function(){
    it("returns all data entry user",async function(){
        try{
            const response=await supertest
            .get('/get-all-data-entry-user') 
            .expect(200);             
        }catch(error){
            throw error;
        }
    })
})
describe("GET survey/get-survey-data-entry-user",function(){
    it("returns all survey data entry user",async function(){
        try{
            await supertest
                .get('/get-survey-data-entry-user')
                .expect(200)
        }catch(error){
            throw new Error(error)
        }
    })
})


describe('GET survey/get-survey-by-id/:surveyId', function () {
    it('returns all questions list by given form id', async () => {
        let id = "65639887af0e9514d68e9671";
        try {
             let res=await supertest
                .get(`/get-survey-by-id/${id}`)
                .expect(200);
                expect((res) => {
                // Assuming createdAt is a Date object in your response
                const createdAtDate = new Date(res.body.survey.createdAt);
                const currentDate = new Date();
                // Asserting that createdAt is less than the current date
                if (createdAtDate >= currentDate) {
                 throw new Error('createdAt should be less than the current date');
                }
            });
        } catch (e) {
            throw new Error(e);
        }
    });
});


describe("POST survey/get-questions-list-by-survey-id", function () {
    it("STATUS 200,returns where success is equal to true", async () => {
        try {
            let obj = {
                survey_id: "65639887af0e9514d68e9671"
            };
              let response=await supertest.post('/get-questions-list-by-survey-id', obj);
                expect(response.body.success).to.equal(true);
            } catch (err) {
            throw new Error(err);
        }
    });
});



