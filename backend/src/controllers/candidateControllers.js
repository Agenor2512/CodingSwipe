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
    const resultCandidate = await tables.candidate.create(
      candidatesInfo
    );
    const resultResume = await tables.resume.create(resumeInfos);

    const { languages } = req.body;
    console.info(languages);

    await Promise.all(
      languages.map((language) =>
        tables.resume_has_programming_languages.create(randomId, language)
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

const readResumeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.info("ID", id);
    const resume = await tables.resume.readById(id);
    const languages = await tables.resume_has_programming_languages.readById(id);
    const biography = await tables.candidate.readBiographyById(id);
    const experience = await tables.experiences.readById(id);

    console.info("BIO", biography);
    res.json([
      {
        infos: resume,
        langues: languages,
        biography: biography[0].biography,
        experience,
      },
    ]);
  } catch (error) {
    next(error);
  }
};

const readBiography = async (req, res, next) => {
  const { id } = req.params;

  try {
    const biography = await tables.candidate.readBiographyById(id);

    console.info("BIOGRAPHY", biography);
    res.json([
      {
        biography: biography[0].biography,
      },
    ]);
  } catch (error) {
    next(error);
  }
};

const updateBiography = async (req, res, next) => {
  const resumeInfos = {
    biography: req.body.biography,
    id: req.params.id,
  };

  try {
    const result = await tables.candidate.updateBiographyById(resumeInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "CV introuvable" });
    } else {
      res.json({ msg: "CV modifié avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  readById,
  add,
  readResumeById,
  readBiography,
  updateBiography,
};
