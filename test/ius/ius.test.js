
const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/ius';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;

const _id = '657a9e2c2df106037ed62263'

describe("POST"+apiName+"/insert-ius", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .post("/insert-ius")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});

describe("POST"+apiName+"/insert-ius", function () {
    it("returns indcator unit subgroup insert", async function () {
        try {
            const payload = {
                "newsubgroup": [
                    {
                        "subgroup_id": "newSubgroup",
                        "subgroup_name": "Urban Total Male",
                        "subgroup_dimension_name": "Location Location Sex",
                        "topic_name": "",
                        "sub_topic_name": "",
                        "sector_name": "Agriculture",
                        "sub_sector_name": "Cane",
                        "subsector_id": "64ec9295ddf0117a20606d00",
                        "target_id": "",
                        "combination": {
                            "name": "Urban Total Male",
                            "dimension": "Location Location Sex",
                            "combination": [
                                {
                                    "name": "Urban",
                                    "dimension": "Location",
                                    "seq": 1
                                },
                                {
                                    "name": "Total Male",
                                    "dimension": "Location Sex",
                                    "seq": 2
                                }
                            ]
                        }
                    }
                ],
                "indicator": "Annual change in Producer Price Index",
                "unit": "Hectare",
                "highIsGood": true,
                "min": 0,
                "max": 0,
                "changeSeq": false,
                "changeDefultSubgroup": false,
                "oldDefultSubgroupId": 0
            }
            const response = await supertest
                .post("/insert-ius")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});



describe("POST"+apiName+"/insert-ius", function () {
    it("returns indcator unit subgroup update", async function () {
        try {
            const payload = {
                "newsubgroup": [
                    {
                        "subgroup_id": "657ab3425e40b8a1aa123740",
                        "subgroup_name": "Urban Total Male",
                        "subgroup_dimension_name": "Location Location Sex",
                        "topic_name": "Goal 2",
                        "sub_topic_name": "Target 2.1: By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round.",
                        "sector_name": "Agriculture",
                        "sub_sector_name": "Cane",
                        "subsector_id": "64ec9295ddf0117a20606d00",
                        "target_id": "64f6d4ce3eda4075f6491970",
                        "combination": {
                            "name": "Urban Total Male",
                            "dimension": "Location Location Sex",
                            "combination": [
                                {
                                    "name": "Urban",
                                    "dimension": "Location",
                                    "seq": 1
                                },
                                {
                                    "name": "Total Male",
                                    "dimension": "Location Sex",
                                    "seq": 2
                                }
                            ]
                        },
                        "mode": "edit"
                    }
                ],
                "indicator": "Annual change in Producer Price Index",
                "unit": "Hectare",
                "highIsGood": true,
                "min": 0,
                "max": 0,
                "changeSeq": false,
                "changeDefultSubgroup": false,
                "oldDefultSubgroupId": 0
            }
            const response = await supertest
                .post("/insert-ius")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});


describe("POST"+apiName+"/delete-indicator-by-ius-associte-check", function () {
    it("returns delete indicator unit subgroup", async function () {
        try {
            const payload = {
                iu_id:'652920b705cb2b5458f3b8ab'
            }
            const response = await supertest
                .post("/delete-indicator-by-ius-associte-check")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
               .expect(200);
        } catch (error) {
            throw error;
        }
    });
});