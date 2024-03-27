const AbstractManager = require("./AbstractManager");

class LikeManager extends AbstractManager {
  constructor() {
    super({ table: "like" });
  }
}

module.exports = LikeManager;
