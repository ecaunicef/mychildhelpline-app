const { expect } = require("chai");
const confToken = require("../cons");
const auth = confToken.token;
const baseUrl = confToken.baseUrl;
const apiName = "/survey-frame";
const apiName1 = "/common-frame";
const supertest = require("supertest")(baseUrl + apiName);
const supertest1 = require("supertest")(baseUrl + apiName1);

describe("GET" + apiName1 + "/get-common-frame-list", function () {
  it("status 400,returns unauthorized user", async function () {
    try {
      let res = await supertest1.get("/get-list").expect(400);
    } catch (error) {
      throw error;
    }
  });
});

describe("GET" + apiName1 + "/get-common-frame-list", function () {
  it("status 200,returns list of survey frame", async function () {
    try {
      let res = await supertest1
        .get("/get-common-frame-list")
        .set("Cookie", [`auth=${auth}`])
        .expect(200);
    } catch (error) {
      throw error;
    }
  });
});

describe("POST survey-frame/get-survey-frame-enstablishment-details-by-filter", function () {
  it("STATUS 200,returns where success is equal to true", async () => {
    try {
      let payload = {
        commonFrameId: "657000ce24000c1f14911d35",
        filter:
          '"[{\\"data\\":[{\\"column\\":\\"state\\",\\"searchText\\":\\"\\",\\"displayName\\":\\"State\\",\\"operator\\":\\"=\\",\\"value\\":\\"6569a70caf0e9514d638f74e\\",\\"dbKey\\":\\"enterprises.basic_details.state\\",\\"listName\\":\\"LIVE\\",\\"columnName\\":\\"state\\",\\"isMultiple\\":false}],\\"filterName\\":\\"STATE\\"}]"',
        page: {
          size: 10,
          totalElements: 0,
          totalPages: 0,
          pageNumber: 0,
          startOffset: 0,
          filterKeyWord: "",
          userId: "",
          endOffset: 0,
        },
      };
      const response = await supertest
        .post("/get-survey-frame-enstablishment-details-by-filter")
        .set("Cookie", [`auth=${auth}`])
        .send(payload)
        .expect(200);
      expect(response.body.success).to.equal(true);
    } catch (err) {
      throw new Error(err);
    }
  });
});

// describe("POST survey-frame/check-delete", function () {
//   it("STATUS 200,returns where success is equal to true", async () => {
//     try {
//       let payload = {
//         rowId: "6570014624000c1f14911d37",
//       };
//       const response = await supertest
//         .post("/check-delete")
        // .set("Cookie", [`auth=${auth}`])
//         .send(payload)
//         .expect(200);
//       // expect(response.body.success).to.equal(true);
//     } catch (err) {
//       throw new Error(err);
//     }
//   });
// });

describe("POST get-establishment-list-by-common-frame-id", function () {
  it("STATUS 200,returns where success is equal to true", async () => {
    try {
      let payload = {
        commonFrameId: "656fc86c9dbf25ef96740bea",
        page: {
          size: 10,
          totalElements: 0,
          totalPages: 0,
          pageNumber: 0,
          startOffset: 0,
          filterKeyWord: "",
          userId: "",
          endOffset: 0,
        },
        isBeingSurveyed: false,
        filter: "[]",
      };
      const response = await supertest
        .post("/get-establishment-list-by-common-frame-id")
        .set("Cookie", [`auth=${auth}`])
        .send(payload)
        .expect(200);
      expect(response.body.success).to.equal(true);
    } catch (err) {
      throw new Error(err);
    }
  });
});
