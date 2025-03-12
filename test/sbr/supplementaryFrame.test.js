const { expect } = require('chai');
const confToken = require('../cons')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/supplementary-frame'
const supertest = require('supertest')(baseUrl + apiName);

// get-list

describe("GET" + apiName + "/get-list", function () {
    it("status 400,returns unauthorized user", async function () {
        try {
            let res = await supertest
                .get("/get-list")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});


describe("GET" + apiName + "/get-list", function () {
    it("status 200,returns list of supplementaryframe", async function () {
        try {
            let res = await supertest
                .get("/get-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
            expect(res.body).to.have.property('data').that.is.an('array').with.length.greaterThan(0);
        } catch (error) {
            throw error;
        }
    });
});


// get supplementary establishment list   supplementary-frame/get-list-by-supplementary-frame

describe("POST" + apiName + "/get-list-by-supplementary-frame", function () {
    it("status 400,returns unauthorized user", async function () {
        try {
            const payload = {
                page: {
                    size: 10, totalElements: 0, totalPages: 0, pageNumber: 0, startOffset: 0, filterKeyWord: "",
                    pageNumber: 0,
                    size: 10,
                    startOffset: 0,
                    totalElements: 0,
                    totalPages: 0,
                    userId: ""
                },
                rowId: "657aea17ec5c68eff65701a4"
            }

            let res = await supertest
                .post("/get-list-by-supplementary-frame")
                .send(payload)
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST" + apiName + "/get-list-by-supplementary-frame", function () {
    it("status 200,returns list of supplementaryframe", async function () {
        try {
            const payload = {
                page: {
                    size: 10, totalElements: 0, totalPages: 0, pageNumber: 0, startOffset: 0, filterKeyWord: "",
                    pageNumber: 0,
                    size: 10,
                    startOffset: 0,
                    totalElements: 0,
                    totalPages: 0,
                    userId: ""
                },
                rowId: "657aea17ec5c68eff65701a4"
            }
            let res = await supertest
                .post("/get-list-by-supplementary-frame")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});













