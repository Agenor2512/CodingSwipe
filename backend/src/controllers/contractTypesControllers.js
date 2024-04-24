const tables = require("../tables");

const browse = async (_, res, next) => {
  try {
    const contractTypes = await tables.contract_types.readAll();
    res.json(contractTypes);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
