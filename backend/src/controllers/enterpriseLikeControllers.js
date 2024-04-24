const tables = require("../tables");

const add = async (req, res, next) => {
  const likeInfo = req.body;

  try {
    await tables.enterprise_like.create(likeInfo);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
};
