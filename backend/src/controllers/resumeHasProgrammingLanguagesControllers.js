const { v4: generateRandomUUID } = require("uuid");
const tables = require("../tables");

const add = async (req, res, next) => {
  const randomId = generateRandomUUID();
  const candidateInfos = {
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
    contractTypesId: req.body.contractTypesId,
    workRhythmsId: req.body.workRhythmsId,
    levelId: req.body.levelId,
    candidateId: randomId,
  };

  try {
    const resultCandidate = await tables.candidate.create(candidateInfos);
    const resultResume = await tables.resume.create(resumeInfos);

    const { languages } = req.body;
    console.info(languages);

    await Promise.all(
      languages.map((language) =>
        tables.resume_has_programming_languages.create(randomId, language)
      )
    );

    res.status(201).json({
      msg: "candidat enregistré avec succés",
      candidate: resultCandidate,
      resume: resultResume,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { add };
