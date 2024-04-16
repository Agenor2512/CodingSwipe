const tables = require("../tables");

const readById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const mission = await tables.missions.readById(id);
    res.json(mission);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const infos = {
    enterpriseId: req.body.enterpriseId,
    mission: req.body.mission,
  };

  console.info("INFOS", infos);
  try {
    const mission = await tables.missions.create(infos);
    res.status(201).json({ mission });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await tables.missions.delete(id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "Mission introuvable" });
    } else {
      res.json({ msg: "Mission supprimée avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  readById,
  add,
  remove,
};
