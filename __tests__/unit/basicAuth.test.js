const BasicAuth = require("../../src/app");

const request = require("supertest");
const express = require("express");

const faker = require("faker");
const basicAuthCredentials = {
  username: faker.internet.userName(),
  password: faker.internet.password()
};

const wrongCredentials = {
  username: faker.internet.userName(),
  password: faker.internet.password()
};
const newBasicAuth = new BasicAuth(
  basicAuthCredentials.username,
  basicAuthCredentials.password
);

const app = express();
app.get("/", newBasicAuth.protect, (req, res) => res.send(""));

describe("BasicAuth unit tests", () => {
  it("should provide auth credentials and succefully returns 200", async () => {
    const response = await request(app)
      .get("/")
      .auth(basicAuthCredentials.username, basicAuthCredentials.password);

    expect(response.status).toBe(200);
  });

  it("should provide wrong auth credentials and returns 401", async () => {
    const response = await request(app)
      .get("/")
      .auth(wrongCredentials.username, wrongCredentials.password);

    expect(response.status).toBe(401);
  });

  it("should not provide auth credentials and returns 401", async () => {
    const response = await request(app)
      .get("/")
     
    expect(response.status).toBe(401);
  });
});
