const tables = require("../tables");

const browse = async (_, res, next) => {
  try {
    const levels = await tables.levels.readAll();
    res.json(levels);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
