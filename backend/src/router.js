const express = require("express");

const router = express.Router();

const enterpriseControllers = require("./controllers/enterpriseControllers");
const candidateControllers = require("./controllers/candidateControllers");
const experienceControllers = require("./controllers/experienceControllers");

const authenticationControllers = require("./controllers/authenticationControllers");
const authenticationService = require("./services/authentication");
const candidateValidator = require("./middlewares/candidateValidator");
const enterpriseValidator = require("./middlewares/enterpriseValidator");

// Login part
router.post(
  "/login",
  authenticationService.checkIfEmailExist,
  authenticationControllers.login
);

router.delete("/logout", authenticationControllers.logout);

// Enterprise part
router.get("/enterprises", enterpriseControllers.browse);
router.get("/enterprises/:id", enterpriseControllers.readById);
router.post(
  "/enterprises",
  enterpriseValidator.validateEnterprise,
  authenticationService.hashPassword,
  enterpriseControllers.add
);

// Candidate part
router.get("/candidates", candidateControllers.browse);
router.get("/candidates/:id", candidateControllers.readById);
router.post(
  "/candidates",
  candidateValidator.validateCandidate,
  authenticationService.hashPassword,
  candidateControllers.add
);
router.post("/experience", experienceControllers.add);
router.delete("/experience/:id", experienceControllers.remove);

router.get("/resume", candidateControllers.readResume);
router.get("/resume/:id", candidateControllers.readResumeById);
router.get("/joboffer", enterpriseControllers.readJobOffer);
router.get("/biography/:id", candidateControllers.readBiography);
router.put("/biography/:id", candidateControllers.updateBiography);
router.get("/description/:id", enterpriseControllers.readDescriptionById);
router.put("/description/:id", enterpriseControllers.updateDescription);

module.exports = router;
