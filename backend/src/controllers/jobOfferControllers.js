const tables = require("../tables");

const browseRandom = async (req, res, next) => {
  try {
    const enterprise = await tables.enterprise.readRandom();
    const joboffer = await tables.job_offer.readById(enterprise.id);
    const mission = await tables.missions.readById(enterprise.id);
    const languages = await tables.job_offer_has_programming_languages.readById(
      enterprise.id
    );
    console.info(enterprise.id);
    res.json({
      infos: joboffer,
      programmingLanguages: languages,
      mission,
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
    const mission = await tables.missions.readById(enterprise.id);
    const languages = await tables.job_offer_has_programming_languages.readById(
      enterprise.id
    );
    res.json({
      infos: joboffer,
      programmingLanguages: languages,
      mission,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  readById,
  browseRandom,
};
