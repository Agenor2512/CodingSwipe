const tables = require("../tables");

const readCandidateMatchesById = async (req, res, next) => {
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

const readEnterpriseMatchesById = async (req, res, next) => {
  try {
    const match = await tables.enterprise_like.readMatchById(req.params.id);

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
  readCandidateMatchesById,
  readEnterpriseMatchesById,
};
