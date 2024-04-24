const tables = require("../tables");

const browseRandom = async (req, res, next) => {
  const { id } = req.user;

  try {
    const enterprise = await tables.enterprise.readRandom(id);
    const joboffer = await tables.job_offer.readById(enterprise.id);
    const missions = await tables.missions.readById(enterprise.id);
    const languages = await tables.job_offer_has_programming_languages.readById(
      enterprise.id
    );
    console.info(enterprise.id);
    res.json({
      infos: joboffer,
      programmingLanguages: languages,
      missions,
    });
  } catch (error) {
    next(error);
  }
};

const readById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await tables.enterprise.readById(id);
    const joboffer = await tables.job_offer.readById(id);
    const missions = await tables.missions.readById(id);
    const languages = await tables.job_offer_has_programming_languages.readById(
      id
    );
    res.json({
      infos: joboffer,
      programmingLanguages: languages,
      missions,
    });
  } catch (error) {
    next(error);
  }
};

const readSalary = async (req, res, next) => {
  const { id } = req.params;

  try {
    const salary = await tables.job_offer.readSalaryById(id);
    res.json({
      salary: salary.salary,
    });
  } catch (error) {
    next(error);
  }
};

const updateSalary = async (req, res, next) => {
  const jobOfferInfos = {
    salary: req.body.salary,
    id: req.params.id,
  };

  try {
    const result = await tables.job_offer.updateSalaryById(jobOfferInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "offre introuvable" });
    } else {
      res.json({ msg: "offre modifiée avec succès" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  readById,
  browseRandom,
  readSalary,
  updateSalary,
};
