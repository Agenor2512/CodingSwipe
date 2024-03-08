const express = require("express");

const router = express.Router();

const enterpriseControllers = require("./controllers/enterpriseControllers");

const authenticationService = require("./services/authentification");

router.get("/enterprises", enterpriseControllers.browse);

router.get("/enterprises/:id", enterpriseControllers.readById);

router.post(
  "/enterprises",
  authenticationService.hashPassword,
  enterpriseControllers.add
);

module.exports = router;
