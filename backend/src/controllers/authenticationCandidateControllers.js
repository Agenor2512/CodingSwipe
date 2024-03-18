const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const loginCandidate = await tables.candidate.readByEmailWithPassword(
      req.body.email
    );

    const verifiedPassword = await argon2.verify(
      loginCandidate[0].password,
      req.body.password
    );

    if (loginCandidate.length === 0) {
      res.sendStatus(422);
    }

    if (verifiedPassword === true) {
      const token = await jwt.sign(
        {
          submitted: loginCandidate[0].id,
          email: loginCandidate[0].email,
        },
        process.env.APP_SECRET
      );

      res
        .cookie("authentication", token, {
          httpOnly: true,
          sameSite: "Lax",
        })
        .json({
          message: "Authentication succeded !",
          firstname: loginCandidate[0].firstname,
          lastname: loginCandidate[0].lastname,
          id: loginCandidate[0].id,
          email: loginCandidate[0].email,
        });
    } else {
      res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
