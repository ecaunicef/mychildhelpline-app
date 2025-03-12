    const { expect } = require('chai');
    const confToken = require('../cons')
    const auth = confToken.token
    const baseUrl = confToken.baseUrl
    const supertest = require('supertest')(baseUrl);

    describe("POST calculation/get-calculation-data", function () {
        it("STATUS 200,returns  list of all calculation data by given suveyId ", async function () {
            try {
                let obj = {
                    survey_id: "65639887af0e9514d68e9671"
                };
                let  res=await supertest
                    .post("/calculation/get-calculation-data", obj)
                    .expect(200);
                        
                expect(res.body.data).to.have.lengthOf(0);
            } catch (error) {
                throw error;
            }
        });
    });

describe("POST option/get-list-by-category", function () {
    it("should return list of categories which has status true", async () => {
        try {
            let res = await supertest
                .post('/option/get-list-by-category', { category_key: "all" })
                .expect(200)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    if (!Array.isArray(res.body.data)) {
                        throw new Error('Categories should be an array');
                    }
                });
        } catch (error) {
            throw error;
        }
    });
});




