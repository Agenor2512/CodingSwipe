const AbstractManager = require("./AbstractManager");

class WorkRhythmsManager extends AbstractManager {
  constructor() {
    super({ table: "work_rhythms" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = WorkRhythmsManager;
