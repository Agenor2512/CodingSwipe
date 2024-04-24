const AbstractManager = require("./AbstractManager");

class SoftSkillsManager extends AbstractManager {
  constructor() {
    super({ table: "soft_skills" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = SoftSkillsManager;
