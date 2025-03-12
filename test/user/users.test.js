const confToken = require('../cons.js')
const auth = confToken.token
const baseUrl = confToken.baseUrl
const supertest = require('supertest')(`${baseUrl}/users`);
const expect = require("chai").expect;


describe("GET /users/generate-captcha", function () {
  it("returns 6 digit captcha text", async function () {
    const response = await supertest.get("/generate-captcha");
    expect(response.status).to.eql(200);
    expect(response.body.captcha.length).to.eql(6);
  });

});


describe("GET /users/all", function () {
    it("returns 400 Unauthorized without authentication", async function () {
        try {
            const response = await supertest
                .get("/all")
                .expect(400);
        } catch (error) {
            throw error;
        }
    });
});


describe("GET /users/all", function () {
    it("returns all users", async function () {
        try {
            const response = await supertest
                .get("/all")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});



// describe("POST /login", function () {
//     it("login user", async function () {

//         try {
//             const payload = {
//                 "email": "admin@maustats.org",
//                 "password": "",
//                 "enteredCaptcha": "Hx@ciw",
//                 "uuid": "b2df8f66-bb7b-4459-9b2a-cb44a67d51cf"
//             }

//             const response = await supertest
//                 .post("/login")
//                 .send(payload)
//                 .expect(200); 

//                 console.log(response.body)
//         } catch (error) {
//             throw error;
//         }

//     });

//     it("returns 400 Bad Request with invalid data", async function () {
//         const invalidUserData = {
//             // Invalid data without required fields
//         };

//         const response = await supertest
//             .post("/login")
//             .send(invalidUserData)
//             .expect(400);

//         // Additional assertions or checks for a 400 Bad Request response
//     });
// });

describe("GET /users/details", function () {
    it("get user details", async function () {
        try {
            const response = await supertest
                .get("/details")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});

describe("GET /users/get-role", function () {
    it("get user details", async function () {
        try {
            const response = await supertest
                .get("/get-role")
                .set("Cookie", [`auth=${auth}`])
                .expect(200);

        } catch (error) {
            throw error;
        }
    });
});