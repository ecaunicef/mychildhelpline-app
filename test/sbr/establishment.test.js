const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/establishment';
const supertest = require('supertest')(baseUrl + apiName);
const expect = require("chai").expect;





describe("POST" + apiName + "/add", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/add");
                expect(400);
        } catch (error) {
            throw error;
        }
    });
});




describe("POST" + apiName + "/delete-establishment", function () {
    it("returns add establishment", async function () {
        try {
            let payload = {
                "_id": null,
                "id": null,
                "enterpriseId": "6576c689763254211d479e3c",
                "brnOfParentEnterprise": "I23010746",
                "establishmentNumber": "I23010746-0011",
                "description": "SHAMNAZ ENTERPRISE Ltd",
                "state": "6569a70caf0e9514d638f75b",
                "mainActivity": null,
                "mainActivityDescription": null,
                "secondaryActivities": null,
                "ancillaryActivities": null,
                "companiesDivisionTradeCode": null,
                "activitiesMatchingTradeCode": null,
                "institutionalSector": null,
                "exportOriented": null,
                "governmentPaysiteCode": null,
                "informationSource": null,
                "suspectedLarge": null,
                "created": "2023-10-03T00:00:00.000Z",
                "startedOperating": "2023-10-03T00:00:00.000Z",
                "address": "LA  MARIE ROAD 15 CANTONS VACOAS",
                "mvca": "6569a70aaf0e9514d638e878",
                "titleOrDesignation": "",
                "contactPerson": "",
                "position": "",
                "telephone1": "",
                "telephone2": "",
                "fax": "",
                "email": "",
                "address1": "",
                "address2": "7 TERNAY STREET, PORT LOUIS",
                "address3": "",
                "address4": "",
                "address5": "",
                "secondaryCorrespondenceTitleOrDesignation": "",
                "secondaryCorrespondenceContactPerson": "",
                "secondaryCorrespondencePosition": "",
                "secondaryCorrespondenceTelephone1": "",
                "secondaryCorrespondenceTelephone2": "",
                "secondaryCorrespondenceFax": "",
                "secondaryCorrespondenceEmail": "",
                "secondaryCorrespondenceAddress1": "",
                "secondaryCorrespondenceAddress2": "",
                "secondaryCorrespondenceAddress3": "",
                "secondaryCorrespondenceAddress4": "",
                "secondaryCorrespondenceAddress5": "",
                "measuresTurnover": "",
                "measuresMaleEmployment": "",
                "measuresFemaleEmployment": "",
                "measuresWorkforce": "",
                "measuresForeignMaleEmployment": "",
                "measuresForeignFemaleEmployment": "",
                "measuresForeignWorkforce": "",
                "measuresAcreageUnderCultivation": "",
                "labourUnitDataLabourSector": null,
                "labourUnitDataFactoryArea": null,
                "labourUnitDataCategoryOfGrower": null,
                "labourUnitDataCompanyCode": null,
                "labourUnitDataTourismSector": null,
                "labourUnitDataLabourEnterpriseName": null,
                "lastAnnualSeeCycle": null,
                "lastquarterlySeeCycle": null,
                "lastAnnualSee2020Cycle": null,
                "lastQuarterlySee2020Cycle": null,
                "autoCreated": null,
                "remarks": null,
                "sourcePrecedence": "Labour"
            };
            const res = await supertest
                .post("/add-establishment")
                .set("Cookie", [`auth=${auth}`])
                .send(payload);
            expect(200);
        } catch (error) {
            throw new Error(error);
        }
    });
});



describe("POST" + apiName + "/delete-establishment", function () {
    it("returns delete establishment", async function () {
        try {
            let payload = {
                "_id": "65782b66d31981028ca46291"
            };
             await supertest
                .post("/delete-establishment")
                .set("Cookie", [`auth=${auth}`])
                .send(payload);
            expect(200);
        } catch (error) {
            throw new Error(error);
        }
    });
});



describe("POST" + apiName + "/status-update-establishment", function () {
    it("returns status of  establishment", async function () {
        try {
            let payload = {
                "_id": "6576c68a763254211d479e97",
                "status": 0
            };
            const res = await supertest
                .post("/status-update-establishment")
                .set("Cookie", [`auth=${auth}`])
                .send(payload);
            expect(200);
        } catch (error) {
            throw new Error(error);
        }
    });
});












