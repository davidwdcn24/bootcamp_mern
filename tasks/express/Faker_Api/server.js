const express = require("express");
const { faker } = require('@faker-js/faker');
const { User } = require("./models/User");
const { Company } = require("./models/Company");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users/new", (req, res) => {
    res.json(new User());
})

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
})

app.get("/api/user/company", (req, res) => {
    const result = {
        user: new User(),
        company: new Company()
    };
    res.json(result);
})

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);