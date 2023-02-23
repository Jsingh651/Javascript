const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;


const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        _id: faker.database.mongodbObjectId(),
    };
    return newUser
  }
  const newFakeUser = createUser();

const createCompany = () => {
    const newCompany = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.bsBuzz(),
        address: [faker.address.streetName(), faker.address.cityName(), faker.address.state(),faker.address.buildingNumber(),faker.address.county()]
    };
    return newCompany
  }
  const newFakeCompany = createCompany();

// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  res.json(newFakeUser);
});
app.get("/api/companies/new", (req, res) => {
  res.json(newFakeCompany);
});
app.get("/api/user/company", (req, res) => {
  res.json([newFakeCompany, newFakeUser]);
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );