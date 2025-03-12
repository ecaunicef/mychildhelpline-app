const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const apiName = '/users';
const supertest = require('supertest')( baseUrl + apiName);
const expect = require("chai").expect;




describe("POST"+apiName+"/add", function () {
    it("Add user", async function () {
        try {
            const payload = {
                "name": " ",
                "email": "",
                "phone": "",
                "password": "",
                "user_role": "",
                "designation": "",
                "areaArray": "[]",
                "department": "",
                "status": 1
            }
            const response = await supertest
                .post("/add")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});

const _id = '657b0164038dbbf247d1c2d5'


describe("PUT"+apiName+"/update/"+_id, function () {
    it("Edit User", async function () {
        try {
            const payload = {
                "id": "",
                "name": "",
                "email": "",
                "phone": "",
                "department": "",
                "designation": "",
                "password": "",
                "user_role": "",
                "areaArray": "[]"
            }
            const response = await supertest
                .put("/update/"+_id)
                .set("Cookie", [`auth=${auth}`])
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});




describe("POST"+apiName+"/delete", function () {
    it("Add user", async function () {
        try {
            const payload = {
                "selectedIds": ""
            }
            const response = await supertest
                .post("/delete")
                .set("Cookie", [`auth=${auth}`])
                .send(payload)
                .expect(200);
        } catch (error) {
            throw error;
        }
    });
});
