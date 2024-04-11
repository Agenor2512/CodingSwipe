const tables = require("../tables");

const add = async (req, res, next) => {
  const infos = {
    candidateId: req.body.candidateId,
    jobTitle: req.body.jobTitle,
    company: req.body.company,
    experience: req.body.experience,
  };

  console.info("INFOS", infos);
  try {
    const experience = await tables.experiences.create(infos);
    res.status(201).json({ experience });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await tables.experiences.delete(id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "Expérience introuvable" });
    } else {
      res.json({ msg: "Expérience supprimée avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
  remove,
};
