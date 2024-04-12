const express = require("express");

const router = express.Router();

const enterpriseControllers = require("./controllers/enterpriseControllers");
const candidateControllers = require("./controllers/candidateControllers");

const resumeControllers = require("./controllers/resumeControllers");
const jobOfferControllers = require("./controllers/jobOfferControllers");

const programmingLanguagesControllers = require("./controllers/programmingLanguagesControllers");
const softSkillsControllers = require("./controllers/softSkillsControllers");
const contractTypesControllers = require("./controllers/contractTypesControllers");
const workRhytmsControllers = require("./controllers/workRhythmsControllers");
const appetencesControllers = require("./controllers/appetencesControllers");

const experienceControllers = require("./controllers/experienceControllers");
const missionControllers = require("./controllers/missionControllers");
const candidateLikeControllers = require("./controllers/candidateLikeControllers");
const enterpriseLikeControllers = require("./controllers/enterpriseLikeControllers");
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

router.delete("/logout", authenticationControllers.logout); // --> rediriger vers page d'accueil

// Enterprise part
router.get("/enterprises", enterpriseControllers.browse);
router.get("/enterprises/:id", enterpriseControllers.readById);
router.post(
  "/enterprises",
  enterpriseValidator.validateEnterprise,
  authenticationService.hashPassword,
  enterpriseControllers.add
); // --> rediriger vers la dernière étape
router.post("/enterprises/likes", enterpriseLikeControllers.add);

// Candidate part
router.get("/candidates", candidateControllers.browse);
router.get("/candidates/:id", candidateControllers.readById);
router.post(
  "/candidates",
  candidateValidator.validateCandidate,
  authenticationService.hashPassword,
  candidateControllers.add
); // --> rediriger vers la dernière étape
router.post("/candidates/likes", candidateLikeControllers.add);

// Job offer/Resume part
router.get("/missions/:id", missionControllers.readById);
router.post("/missions", missionControllers.add);
router.delete("/missions/:id", missionControllers.remove);
router.post("/experiences", experienceControllers.add);
router.delete("/experiences/:id", experienceControllers.remove);

router.get("/resumes", resumeControllers.browseRandom);
router.get("/resumes/:id", resumeControllers.readById);
router.get("/joboffers", jobOfferControllers.browseRandom);
router.get("/joboffers/:id", jobOfferControllers.readById);
router.get("/biographies/:id", resumeControllers.readBiography);
router.put("/biographies/:id", resumeControllers.updateBiography);
router.get("/descriptions/:id", enterpriseControllers.readDescriptionById);
router.put("/descriptions/:id", enterpriseControllers.updateDescription);

// Existing data part for Offer/Resume
router.get("/programminglanguages", programmingLanguagesControllers.browse);
router.get("/softskills", softSkillsControllers.browse);
router.get("/contracttypes", contractTypesControllers.browse);
router.get("/workrhythms", workRhytmsControllers.browse);
router.get("/appetences", appetencesControllers.browse);

// router.get("/isConnected", middleware, controller.userChecked)

// middleware :
// si le token est invalide => 401 /// Next()

// userChecked :
// res.sendStatus(200)

module.exports = router;
