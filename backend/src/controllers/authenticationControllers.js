const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

const login = async (req, res, next) => {
  try {
    const verifiedPassword = await argon2.verify(
      req.user.password,
      req.body.password
    );

    if (verifiedPassword === true) {
      const token = await jwt.sign(
        {
          id: req.user.id,
          role: req.user.role,
          email: req.user.email,
        },
        process.env.APP_SECRET
      );

      res.cookie("authentication", token).json({
        message: "Authentication succeded !",
        id: req.user.id,
        role: req.user.role,
        email: req.user.email,
      });
    } else {
      res.status(401).send("Wrong Credentials.");
    }
  } catch (error) {
    next(error);
  }
};

const logout = (_, res, next) => {
  try {
    res.clearCookie("authentication").sendStatus(200);
  } catch (error) {
    next(error);
  }
};

module.exports = { login, logout };
