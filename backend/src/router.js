const express = require("express");

const router = express.Router();

const enterpriseControllers = require("./controllers/enterpriseControllers");
const candidateControllers = require("./controllers/candidateControllers");

const authenticationService = require("./services/authentication");

router.get("/enterprises", enterpriseControllers.browse);

router.get("/enterprises/:id", enterpriseControllers.readById);

router.post(
  "/enterprises",
  authenticationService.hashPassword,
  enterpriseControllers.add
);

router.get("/candidates", candidateControllers.browse);

router.get("/candidates/:id", candidateControllers.readById);

router.post(
  "/candidates",
  authenticationService.hashPassword,
  candidateControllers.add
);

module.exports = router;
