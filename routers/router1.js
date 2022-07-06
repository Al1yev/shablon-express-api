const express = require("express");
const router = express.Router();
const dataController = require("../controllers/controller");

router
  .route("/")
  .get(dataController.getAllData)
  .post(dataController.createData);

router
  .route("/:id")
  .get(dataController.getDataById)
  .put(dataController.updateData)
  .delete(dataController.deleteData);

module.exports = router;
