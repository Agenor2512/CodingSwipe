const AbstractManager = require("./AbstractManager");

class ResumeManager extends AbstractManager {
  constructor() {
    super({ table: "resume" });
  }

  async create(infos) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id,biography, appetences_id,candidate_id) values ("2de1feec-a19b-4f16-9226-af782acdab47","Cucu", 1, 1)`,
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

module.exports = ResumeManager;
