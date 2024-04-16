const AbstractManager = require("./AbstractManager");

class LegalStatusManager extends AbstractManager {
  constructor() {
    super({ table: "legal_status" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = LegalStatusManager;
