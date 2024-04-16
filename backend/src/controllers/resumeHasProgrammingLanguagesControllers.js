const tables = require("../tables");

const add = async (req, res, next) => {
  try {
    const { languages } = req.body;
    console.info(languages);

    const { candidateId } = req.params;
    const resumeId = tables.resume.readById(candidateId);

    await tables.resume_has_programming_languages.createMultiple(
      resumeId,
      languages
    );

    res.status(201).json({
      msg: "Langages mis à jour avec succès",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { add };
