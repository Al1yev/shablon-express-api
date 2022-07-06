const express = require("express");
const app = express();

const dataRouter = require("./routers/router1");

app.use("/api/v1/data/", dataRouter);

module.exports = app;
