const tables = require("../tables");

const browseRandom = async (req, res, next) => {
  try {
    const enterprise = await tables.enterprise.readRandom();
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
    const enterprise = await tables.enterprise.readById(id);
    const joboffer = await tables.job_offer.readById(enterprise.id);
    const missions = await tables.missions.readById(enterprise.id);
    const languages = await tables.job_offer_has_programming_languages.readById(
      enterprise.id
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

const readDescription = async (req, res, next) => {
  const { id } = req.params;

  try {
    const description = await tables.job_offer.readDescriptionById(id);
    res.json({
      description: description.description,
    });
  } catch (error) {
    next(error);
  }
};

const updateDescription = async (req, res, next) => {
  const jobOfferInfos = {
    description: req.body.description,
    id: req.params.id,
  };

  try {
    const result = await tables.job_offer.updateDescriptionById(jobOfferInfos);
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
  readDescription,
  updateDescription,
};
