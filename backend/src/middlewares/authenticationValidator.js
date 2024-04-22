const jwt = require("jsonwebtoken");

const validateAuthentication = async (request, response, next) => {
  try {
    // Retrieve bearer token authentication
    const bearer = request.get("Authorization");
    if (!bearer || !bearer.startsWith("Bearer ")) {
      throw new Error("Invalid authorization header");
    }
    const token = bearer.split("Bearer ")[1].trim();

    // Verify JWT token
    if (!token) {
      throw new Error("Token not provided");
    }
    request.user = jwt.verify(token, process.env.APP_SECRET);
    next();
  } catch (error) {
    console.error(error);
    response.status(401).send("You're not authenticated.");
  }
};

module.exports = { validateAuthentication };
