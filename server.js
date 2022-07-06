const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

mongoose.connect(
  process.env.DB.replace("<password>", process.env.DB_PASSWORD),
  console.log("DB is connected successful")
);

app.listen(
  process.env.PORT,
  process.env.URL,
  console.log(
    `Server is running on  ${process.env.URL + ":" + process.env.PORT}  at  `,
    new Date().toISOString().slice(0, 10),
    new Date().toLocaleTimeString()
  )
);
