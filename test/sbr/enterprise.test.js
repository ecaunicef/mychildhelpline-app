const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/enterprise';
const supertest = require('supertest')(baseUrl + apiName);
const expect = require("chai").expect;





describe("POST" + apiName + "/add-enterprise", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/add-enterprise");
            expect(400);
        } catch (error) {
            throw error;
        }
    });
});




describe("POST" + apiName + "/add-enterprise", function () {
    it("returns add enterprise", async function () {
        try {
            let payload = {
                OwnerIdNumber: null,
                acreageUnderCultivation: null,
                activitiesMatchingTradeCode:null,
                address: null,
                address1:null,
                address2 : null,
                address3 : null,
                address4 :null,
                address5 :null,
                ancillaryActivities:["6569a70baf0e9514d638eff0"],
                businessRegistrationNumber:"123BRN456",
                ceasedOperating :null,
                changedName  : null,
                closed : null,
                companiesDivisionTradeCode: 123,
                contactPerson : null,
                created :null,
                email: null,
                enterpriseGroupId: "656fb8309dbf25ef96740b34",
                enterpriseName:"new enterprise",
                exportOriented : null,
                fax:null,
                femaleEmployment :null,
                fileNumber
                    :
                    "123BRN4",
                foreignMaleEmployment
                    :
                    null,
                foreignOwnership
                    :
                    null,
                foreignWorkforce
                    :
                    null,
                foreignfeMaleEmployment
                    :
                    null,
                globalBusinessCategory
                    :
                    "6569a70caf0e9514d638f6d0",
                informationSource
                    :
                    "6569a70aaf0e9514d638e7e6",
                institutionalSector
                    :
                    null,
                mainActivity
                    :
                    "6569a76baf0e9514d6390aa6",
                mainActivityDescription
                    :
                    "description",
                maleEmployment
                    :
                    null,
                mauritianOwnership
                    :
                    null,
                measureForbiddenDeletion
                    :
                    null,
                measureRemarks
                    :
                    null,
                ministryDivision
                    :
                    "6569a70aaf0e9514d638e80e",
                mvca
                    :
                    "6569a70aaf0e9514d638e84f",
                optionalLocality
                    :
                    null,
                optionalStreet
                    :
                    null,
                ownerFirstName
                    :
                    null,
                ownerLastName
                    :
                    null,
                ownerPassportNumber
                    :
                    null,
                ownerTitle
                    :
                    null,
                position
                    :
                    null,
                previosName
                    :
                    "prev name",
                previousBrn
                    :
                    null,
                remarks
                    :
                    "remark",
                restored
                    :
                    null,
                secondaryActivities
                    :
                    ["6569a70aaf0e9514d638e9be", "6569a70aaf0e9514d638e9c0"],
                secondaryCorrespondenceAddress1
                    :
                    null,
                secondaryCorrespondenceAddress2
                    :
                    null,
                secondaryCorrespondenceAddress3
                    :
                    null,
                secondaryCorrespondenceAddress4
                    :
                    null,
                secondaryCorrespondenceAddress5
                    :
                    null,
                secondaryCorrespondenceContactPerson
                    :
                    null,
                secondaryCorrespondenceEmail
                    :
                    null,
                secondaryCorrespondenceFax
                    :
                    null,
                secondaryCorrespondencePosition
                    :
                    null,
                secondaryCorrespondenceTelephone1
                    :
                    null,
                secondaryCorrespondenceTelephone2
                    :
                    null,
                secondaryCorrespondenceTitleOrDesignation
                    :
                    null,
                selectedPrecedence
                    :
                    "VAT",
                socialSecurityNumber
                    :
                    null,
                sourceName
                    :
                    "source",
                startedOperating
                    :
                    null,
                state
                    :
                    "6569a70aaf0e9514d638e7f2",
                taxAccountNumber
                    :
                    null,
                telephone1
                    :
                    null,
                telephone2
                    :
                    null,
                titleOrDesignation
                    :
                    null,
                tradingName
                    :
                    "trading name",
                turnover
                    :
                    null,
                typeOfBusiness
                    :
                    "6569a70aaf0e9514d638e7de",
                typeOfCompany
                    :
                    "6569a70aaf0e9514d638e859",
                typeOfOwnership
                    :
                    "6569a70aaf0e9514d638e7dc",
                vatAccountNumber
                    :
                    null,
                workforce
                    :
                    null,
                workforceSource: null
            }
            const res = await supertest
                .post("/add-enterprise")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw new Error(error.message);
        }
    });
});



describe("POST" + apiName + "/status-update-enterprise", function () {
    it("returns add establishment", async function () {
        try {
            let payload = {
                id: "657b01b8a0703265dd696b5e",
                status: 1
            };
            const res = await supertest
                .post("/status-update-enterprise")
                .set("Cookie", [`auth=${auth}`])
                .send(payload);
            expect(200);
        } catch (error) {
            throw new Error(error.message);
        }
    });
});













