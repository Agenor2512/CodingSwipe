const { v4: generateRandomUUID } = require("uuid");
const tables = require("../tables");

const add = async (req, res, next) => {
  const randomId = generateRandomUUID();
  const enterpriseInfo = {
    randomId,
    name: req.body.name,
    siret: req.body.siret,
    description: req.body.description,
    email: req.body.email,
    password: req.body.hashedPassword,
    departmentId: req.body.departmentId,
    legalStatusId: req.body.legalStatusId,
    businessSectorsId: req.body.businessSectorsId,
  };

  const jobOfferInfos = {
    randomId,
    salary: req.body.salary,
    contractTypesId: req.body.contractTypesId,
    workRhythmsId: req.body.workRhythmsId,
    appetencesId: req.body.appetencesId,
    enterpriseId: randomId,
  };

  try {
    const resultEnterprise = await tables.enterprise.create(enterpriseInfo);
    const resultJobOffer = await tables.job_offer.create(jobOfferInfos);

    const { languages } = req.body;
    console.info(languages);

    await Promise.all(
      languages.map((language) =>
        tables.job_offer_has_programming_languages.create(randomId, language)
      )
    );

    res.status(201).json({
      msg: "entreprise enregistré avec succés",
      enterprise: resultEnterprise,
      jobOffer: resultJobOffer,
    });
  } catch (err) {
    next(err);
  }
};

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

module.exports = {
  add,
  browse,
  readById,
};
