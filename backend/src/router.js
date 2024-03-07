const express = require("express");

const router = express.Router();

const candidateControllers = require("./controllers/candidateControllers");

const authenticationService = require("./services/authentication");

router.get("/candidates", candidateControllers.browse);

router.get("/candidates/:id", candidateControllers.readById);

router.post(
  "/candidates",
  authenticationService.hashPassword,
  candidateControllers.add
);

module.exports = router;
