const express = require("express");

const router = express.Router();

const candidateControllers = require("./controllers/candidateControllers");

router.get("/candidates", candidateControllers.browse);

router.get("/candidates/:id", candidateControllers.read);

router.post("/candidates", candidateControllers.add);

module.exports = router;
