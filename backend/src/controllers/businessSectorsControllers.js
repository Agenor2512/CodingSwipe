const tables = require("../tables");

const browse = async (_, res, next) => {
  try {
    const businessSectors = await tables.business_sectors.readAll();
    res.json(businessSectors);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
