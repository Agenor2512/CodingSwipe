const tables = require("../tables");

const add = async (req, res, next) => {
  const likeInfo = {
    enterpriseId: req.body.enterpriseId,
    candidateId: req.body.candidateId,
  };

  try {
    await tables.candidate_like.create(likeInfo);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
};
