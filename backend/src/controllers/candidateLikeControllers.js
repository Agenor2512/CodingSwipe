const tables = require("../tables");

const add = async (req, res, next) => {
  const likeInfo = {
    enterpriseId: req.body.enterprise_id,
    candidateId: req.body.candidate_id,
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
