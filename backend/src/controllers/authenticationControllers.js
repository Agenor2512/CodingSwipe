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

      res
        .cookie("authentication", token, {
          httpOnly: true,
          sameSite: "Lax",
        })
        .json({
          message: "Authentication succeded !",
          id: req.user.id,
          role: req.user.role,
          email: req.user.email,
        });
    } else {
      res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
