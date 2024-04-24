const tables = require("../tables");

const browse = async (_, res, next) => {
  try {
    const programmingLanguages = await tables.programming_languages.readAll();
    res.json(programmingLanguages);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
