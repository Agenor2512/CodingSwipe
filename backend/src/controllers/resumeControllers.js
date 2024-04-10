const { v4: generateRandomUUID } = require("uuid");
const tables = require("../tables");

const add = async (req, res, next) => {
  const randomId = generateRandomUUID();
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
    const resultCandidate = await tables.candidate.createCandidate(
      candidatesInfo
    );
    const resultResume = await tables.candidate.createResume(resumeInfos);

    const { languages } = req.body;
    console.info(languages);

    await Promise.all(
      languages.map((language) =>
        tables.candidate.createProgrammingLanguages(randomId, language)
      )
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

const readById = async (req, res, next) => {
  try {
    const candidate = await tables.candidate.readById(req.params.id);
    const resume = await tables.candidate.readResumeByIdForProfile(
      candidate.id
    );
    const languages = await tables.candidate.readLanguagesByIdForProfile(
      candidate.id
    );
    res.json({
      infos: resume,
      langues: languages,
    });
  } catch (error) {
    next(error);
  }
};

const readRandom = async (req, res, next) => {
  try {
    const candidate = await tables.candidate.randomCandidate();
    const resume = await tables.candidate.readResumeById(candidate[0].id);
    const languages = await tables.candidate.readLanguagesById(candidate[0].id);
    res.json([
      {
        infos: resume,
        langues: languages,
      },
    ]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  readById,
  readRandom,
  add,
};
