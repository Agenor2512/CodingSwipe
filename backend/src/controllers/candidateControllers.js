const { v4: generateRandomUUID } = require("uuid");
const tables = require("../tables");

const browse = async (_, res, next) => {
  try {
    const candidates = await tables.candidate.readAll();

    res.json(candidates);
  } catch (err) {
    next(err);
  }
};

const readById = async (req, res, next) => {
  try {
    const candidate = await tables.candidate.readById(req.params.id);

    if (candidate == null) {
      res.sendStatus(404);
    } else {
      res.json(candidate);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const id = generateRandomUUID();

  const candidateInfo = {
    id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.hashedPassword,
    department_id: req.body.department_id,
  };

  try {
    const insertId = await tables.candidate.create(candidateInfo);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, readById, add };
