const tables = require("../tables");

const add = async (req, res, next) => {
  const likeInfo = {
    candidateId: req.body.candidateId,
    enterpriseId: req.body.enterpriseId,
  };

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
