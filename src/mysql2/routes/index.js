const express = require("express");

const bootcampController = require("../controllers/bootcampController");

const router = express.Router();

router.get("/", bootcampController.getAllBootcamps);

router.get("/:bootcampId", bootcampController.getOneBootcamp);

router.post("/", bootcampController.createNewBootcamp);

router.patch("/:bootcampId", bootcampController.updateOneBootcamp);

router.delete("/:bootcampId", bootcampController.deleteOneBootcamp);

module.exports = router;

