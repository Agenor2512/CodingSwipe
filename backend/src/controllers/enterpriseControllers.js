const tables = require("../tables");

const browse = async (_, res, next) => {
  try {
    const enterprises = await tables.enterprise.readAll();
    res.json(enterprises);
  } catch (err) {
    next(err);
  }
};

const readById = async (req, res, next) => {
  try {
    const enterprise = await tables.enterprise.readById(req.params.id);

    if (enterprise == null) {
      res.sendStatus(404);
    } else {
      res.json(enterprise);
    }
  } catch (err) {
    next(err);
  }
};

const readDescriptionById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const description = await tables.enterprise.readDescriptionById(id);
    res.json([
      {
        description: description[0].description,
      },
    ]);
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
    const result = await tables.enterprise.updateDescriptionById(jobOfferInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "offre introuvable" });
    } else {
      res.json({ msg: "offre modifiée avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  readById,
  readDescriptionById,
  updateDescription,
};
