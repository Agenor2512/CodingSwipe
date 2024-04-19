const tables = require("../tables");

const browseRandom = async (req, res, next) => {
  try {
    const candidate = await tables.candidate.readRandom();
    const resume = await tables.resume.readById(candidate.id);
    const languages = await tables.resume_has_programming_languages.readById(
      candidate.id
    );
    const experiences = await tables.experiences.readById(candidate.id);

    res.json({
      infos: resume,
      programmingLanguages: languages,
      experiences,
    });
  } catch (error) {
    next(error);
  }
};

const readById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await tables.candidate.readById(id);
    const resume = await tables.resume.readById(id);
    const experience = await tables.experiences.readById(id);
    const softSkills = await tables.resume_has_soft_skills.readById(id);
    const languages = await tables.resume_has_programming_languages.readById(
      id
    );
    res.json({
      infos: resume,
      programmingLanguages: languages,
      experience,
      softSkills,
    });
  } catch (error) {
    next(error);
  }
};

const readBiography = async (req, res, next) => {
  const { id } = req.params;

  try {
    const biography = await tables.resume.readBiographyById(id);

    console.info("BIOGRAPHY", biography);
    res.json({
      biography: biography.biography,
    });
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
    const result = await tables.resume.updateBiographyById(resumeInfos);
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
  readById,
  readBiography,
  updateBiography,
  browseRandom,
};
