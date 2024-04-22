const tables = require("../tables");

const readById = async (req, res, next) => {
  try {
    const match = await tables.candidate_like.readMatchById(req.params.id);

    if (match == null) {
      res.sendStatus(404);
    } else {
      res.json(match);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  readById,
};
