const { v4: generateRandomUUID } = require("uuid");
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

const add = async (req, res, next) => {
  const id = generateRandomUUID();

  const enterpriseInfo = {
    id,
    name: req.body.name,
    siret: req.body.siret,
    email: req.body.email,
    department_id: req.body.department_id,
    password: req.body.hashedPassword,
    legal_status_id: req.body.legal_status_id,
    business_sectors_id: req.body.business_sectors_id,
    description: req.body.description,
  };

  try {
    const insertId = await tables.enterprise.create(enterpriseInfo);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  readById,
  add,
};
