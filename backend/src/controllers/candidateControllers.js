const { v4: generateRandomUUID } = require("uuid");
const tables = require("../tables");

const browse = async (_, res, next) => {
  try {
    const candidates = await tables.candidate.readAll();

    res.json(candidates);
  } catch (err) {
    next(err);
  }
};

const readById = async (req, res, next) => {
  try {
    const candidate = await tables.candidate.readById(req.params.id);

    if (candidate == null) {
      res.sendStatus(404);
    } else {
      res.json(candidate);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const randomId = generateRandomUUID(); // FIXME ID utilisé pour resume et candidat en même temps
  const candidatesInfo = {
    randomId,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.hashedPassword,
    departmentId: req.body.departmentId,
  };

  const resumeInfos = {
    randomId,
    biography: req.body.biography,
    appetencesId: req.body.appetencesId,
    candidateId: randomId,
    contractTypesId: req.body.contractTypesId,
    workRhythmsId: req.body.workRhythmsId,
    levelId: req.body.levelId,
  };

  try {
    const resultCandidate = await tables.candidate.create(candidatesInfo);
    const resultResume = await tables.resume.create(resumeInfos);

    const { languages } = req.body;
    console.info(languages);

    await tables.resume_has_programming_languages.createMultiple(
      randomId,
      languages
    );

    res.status(200).json({
      msg: "candidat enregistré avec succès",
      candidate: resultCandidate,
      resume: resultResume,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  readById,
  add,
};
