const tables = require("../tables");

const browse = async (_, res, next) => {
  try {
    const softSkills = await tables.soft_skills.readAll();

    res.json(softSkills);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
