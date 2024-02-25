const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const companies = await tables.company.readAll();
    res.json(companies);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const companyInfo = {
    name: req.body.name,
    siret: req.body.siret,
    legal_status: req.body.legal_status,
    business_sector: req.body.business_sector,
    description: req.body.company_description,
  };

  try {
    const insertId = await tables.company.create(companyInfo);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
  add,
};
