const tables = require("../tables");

const add = async (req, _, next) => {
  const likeInfo = {
    candidateId: req.body.candidate_id,
    enterpriseId: req.body.enterprise_id,
  };

  try {
    await tables.enterprise_like.create(likeInfo);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
};
