const argon2 = require("argon2");
const tables = require("../tables");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, _, next) => {
  try {
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password, hashingOptions);

    req.body.hashedPassword = hashedPassword;
    delete req.body.password;

    next();
  } catch (error) {
    next(error);
  }
};

const checkIfEmailExist = async (req, res, next) => {
  try {
    const loginCandidate = await tables.candidate.readByEmailWithPassword(
      req.body.email
    );

    const loginEnterprise = await tables.enterprise.readByEmailWithPassword(
      req.body.email
    );

    if (loginCandidate.length !== 0) {
      req.user = {
        id: loginCandidate[0].id,
        role: "candidate",
        email: loginCandidate[0].email,
        password: loginCandidate[0].password,
      };
      next();
    } else if (loginEnterprise.length !== 0) {
      req.user = {
        id: loginEnterprise[0].id,
        role: "enterprise",
        email: loginEnterprise[0].email,
        password: loginEnterprise[0].password,
      };

      next();
    } else {
      res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { hashPassword, checkIfEmailExist };
