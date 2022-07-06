const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const dataRouter = require("./routers/router1");

app.use(bodyParser.json());

app.use("/api/v1/data/", dataRouter);

module.exports = app;
