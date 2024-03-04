const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const companies = await tables.company.readAll();
    res.json(companies);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const companyInfo = {
    name: req.body.name,
    siret: req.body.siret,
    legal_status: req.body.legal_status,
    business_sector: req.body.business_sector,
    description: req.body.company_description,
  };

  try {
    const insertId = await tables.company.create(companyInfo);

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

// const update = async (req, res, next) => {
//   const user = {
//     username: req.body.username,
//     id: req.params.id,
//   };
//   try {
//     const result = await tables.user.update(user);
//     console.info(result);
//     if (result.affectedRows > 0) {
//       res.json({ msg: "Utilisateur modifié avec succès" });
//     } else {
//       res.sendStatus(400);
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports = { browse, update, add };
