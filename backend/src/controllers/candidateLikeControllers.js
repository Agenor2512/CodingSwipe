const tables = require("../tables");

const add = async (req, _, next) => {
  const likeInfo = {
    enterpriseId: req.body.enterprise_id,
    candidateId: req.body.candidate_id,
  };

  try {
    await tables.candidate_like.create(likeInfo);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
};
