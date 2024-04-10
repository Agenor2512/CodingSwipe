const AbstractManager = require("./AbstractManager");

class AppetencesManager extends AbstractManager {
  constructor() {
    super({ table: "appetences" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = AppetencesManager;
