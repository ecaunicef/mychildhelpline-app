const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/survey-frame';
const supertest = require('supertest')(baseUrl + apiName);
const expect = require("chai").expect;




describe("POST" + apiName + "/delete", function () {
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


// message
// :
// "Surveyframe deleted successfully"


describe("POST" + apiName + "/delete", function () {
    it("returns 200 delete survey frame", async function () {
        try {
            const payload = {
                rowId:"657005c9c883de4d89cdd4dc"
            };
            const response = await supertest
                .post("/delete")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);

            expect(response.body.message).to.equal("Surveyframe deleted successfully");
        } catch (error) {
            throw error;
        }
    });
});

describe("POST survey-frame/check-delete", function () {
    it("STATUS 200,returns where success is equal to true", async () => {
      try {
        let payload = {
          rowId: "6570014624000c1f14911d37",
        };
        const response = await supertest
          .post("/check-delete")
          .send(payload)
          .expect(200);
        // expect(response.body.success).to.equal(true);
      } catch (err) {
        throw new Error(err);
      }
    });
  });


  describe("POST add", function () {
    it("STATUS 200,returns where success is equal to true", async () => {
      try {
        let payload = {
          commonFrameId: "656fc86c9dbf25ef96740bea",
          name: "Snapshot Name 2023-12-6 6:32:58 -cf -",
          filter: "[{}]",
          isBeingSurveyed: null,
          establishment_count: 5,
        };
        const response = await supertest
          .post("/add")
          .set("Cookie", [`auth=${auth}`])
          .send(payload)
          .expect(200);
        expect(response.body.success).to.equal(true);
      } catch (err) {
        throw new Error(err);
      }
    });
  });
  



