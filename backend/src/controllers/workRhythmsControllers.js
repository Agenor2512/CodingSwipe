const tables = require("../tables");

const browse = async (_, res, next) => {
  try {
    const workRhytms = await tables.work_rhythms.readAll();

    res.json(workRhytms);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
