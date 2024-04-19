const tables = require("../tables");

const add = async (req, res, next) => {
  try {
    const { languages } = req.body;
    console.info(languages);

    const { enterpriseId } = req.params;
    const jobOfferId = tables.job_offer.readById(enterpriseId);

    await tables.job_offer_has_programming_languages.createMultiple(
      jobOfferId,
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
