const tables = require("../tables");

const add = async (req, _, next) => {
  const likeInfo = {
    likedId: req.body.randomId,
  };

  try {
    await tables.like.create(likeInfo);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
};
