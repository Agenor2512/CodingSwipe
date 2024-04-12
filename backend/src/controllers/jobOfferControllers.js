const tables = require("../tables");

const readById = async (req, res, next) => {
  try {
    const enterprise = await tables.enterprise.readById(req.params.id);
    const joboffer = await tables.job_offer.readById(enterprise[0].id);
    const mission = await tables.missions.readById(enterprise[0].id);
    const languages = await tables.job_offer_has_programming_languages.readById(
      enterprise[0].id
    );
    res.json({
      infos: joboffer,
      langues: languages,
      mission,
    });
  } catch (error) {
    next(error);
  }
};

// TO DO : ajouter les missions
const browseRandom = async (req, res, next) => {
  try {
    const enterprise = await tables.enterprise.readRandom();
    const joboffer = await tables.job_offer.readById(enterprise[0].id);
    const mission = await tables.missions.readById(enterprise[0].id);
    const languages = await tables.job_offer_has_programming_languages.readById(
      enterprise[0].id
    );
    console.info(enterprise[0].id);
    res.json([
      {
        infos: joboffer,
        langues: languages,
        mission,
      },
    ]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  readById,
  browseRandom,
};
