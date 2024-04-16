const AbstractManager = require("./AbstractManager");

class DepartmentsManager extends AbstractManager {
  constructor() {
    super({ table: "departments" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = DepartmentsManager;
