const AbstractManager = require("./AbstractManager");

class ProgrammingLanguagesManager extends AbstractManager {
  constructor() {
    super({ table: "programming_languages" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = ProgrammingLanguagesManager;
