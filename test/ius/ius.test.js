
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/ius';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;




describe("GET"+apiName+"/get-indiacator-subGroup", function () {
    it("returns all indiacator subgroup", async function () {
        try {
            const response = await supertest
                .get("/get-indiacator-subGroup")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});


describe("GET"+apiName+"/get-indiacator-classification", function () {
    it("returns all indiacator classification", async function () {
        try {
            const response = await supertest
                .get("/get-indiacator-classification")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});



describe("GET"+apiName+"/get-indicator-list", function () {
    it("returns all indicator list", async function () {
        try {
            const response = await supertest
                .get("/get-indicator-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});



describe("GET"+apiName+"/get-monitoring-data", function () {
    it("returns all monitoring data", async function () {
        try {
            const response = await supertest
                .get("/get-monitoring-data")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});



describe("GET"+apiName+"/get-all-indicator-list", function () {
    it("returns all indicator list", async function () {
        try {
            const response = await supertest
                .get("/get-all-indicator-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});


describe("GET"+apiName+"/get-ius-maping", function () {
    it("returns all ius maping", async function () {
        try {
            const response = await supertest
                .get("/get-ius-maping")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});
// ==
describe("GET"+apiName+"/get-iu-list", function () {
    it("returns all iu list", async function () {
        try {
            const response = await supertest
                .get("/get-iu-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});
describe("GET"+apiName+"/get-framework-indicatorlist", function () {
    it("returns all framework indicator list", async function () {
        try {
            const response = await supertest
                .get("/get-framework-indicatorlist")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});
describe("GET"+apiName+"/getFrameworkIusListNumber", function () {
    it("returns all framework ius list", async function () {
        try {
            const response = await supertest
                .get("/getFrameworkIusListNumber")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});

describe("GET"+apiName+"/indicator-unit-list", function () {
    it("returns all indicator unit list", async function () {
        try {
            const response = await supertest
                .get("/indicator-unit-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});
describe("GET"+apiName+"/get-subgroup", function () {
    it("returns all subgroup", async function () {
        try {
            const response = await supertest
                .get("/get-subgroup")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});
describe("GET"+apiName+"/get-sector-goal", function () {
    it("returns all sector goal", async function () {
        try {
            const response = await supertest
                .get("/get-sector-goal")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});
describe("GET"+apiName+"/indicator-unit-subgroup-list", function () {
    it("returns all indicator unit subgroup list", async function () {
        try {
            const response = await supertest
                .get("/indicator-unit-subgroup-list")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});
describe("GET"+apiName+"/get-indicator-unit", function () {
    it("returns all indicator unit", async function () {
        try {
            const response = await supertest
                .get("/get-indicator-unit")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});
describe("GET"+apiName+"/get-form-ius-maping", function () {
    it("returns all form ius maping", async function () {
        try {
            const response = await supertest
                .get("/get-form-ius-maping")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});