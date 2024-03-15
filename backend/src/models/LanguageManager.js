const AbstractManager = require("./AbstractManager");

class LanguageManager extends AbstractManager {
  constructor() {
    super({ table: "resume_has_programming_languages" });
  }

  async create(infos) {
    const [result] = await this.database.query(
      `insert into ${this.table} (resume_id, programming_languages_id) values (1, ?)`,
      [infos]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = LanguageManager;
