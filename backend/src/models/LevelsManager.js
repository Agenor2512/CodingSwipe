const AbstractManager = require("./AbstractManager");

class LevelsManager extends AbstractManager {
  constructor() {
    super({ table: "levels" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = LevelsManager;
