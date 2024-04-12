const tables = require("../tables");

const browse = async (_, res, next) => {
  try {
    const legalStatus = await tables.legal_status.readAll();
    res.json(legalStatus);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
