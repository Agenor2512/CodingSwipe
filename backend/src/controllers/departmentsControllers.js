const tables = require("../tables");

const browse = async (_, res, next) => {
  try {
    const departments = await tables.departments.readAll();

    res.json(departments);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
