const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const enterprises = await tables.enterprise.readAll();
    res.json(enterprises);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const enterpriseInfo = {
    name: req.body.name,
    siret: req.body.siret,
    legal_status: req.body.legal_status,
    business_sector: req.body.business_sector,
    description: req.body.description,
    email: req.body.email,
    password: req.body.hashedPassword,
  };

  try {
    const insertId = await tables.enterprise.create(enterpriseInfo);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  add,
};

// const browse = async (req, res, next) => {
//   try {
//     const result = await tables.user.readAll();
//     res.json(result);
//   } catch (err) {
//     next(err);
//   }
// };

// const add = async (req, res, next) => {
//   const userInfos = {
//     email: req.body.email,
//     password: req.body.hashedPassword,
//     username: req.body.username,
//   };

//   try {
//     const result = await tables.user.create(userInfos);
//     console.info(result);
//     res.json({ msg: "Utilisateur enregistré avec succès" });
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = { browse, add };
