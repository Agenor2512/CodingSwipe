const tables = require("../tables");

const browse = async (_, res, next) => {
  try {
    const appetences = await tables.appetences.readAll();

    res.json(appetences);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
