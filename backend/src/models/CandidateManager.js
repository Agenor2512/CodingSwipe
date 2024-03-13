const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  async create(candidate) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, firstname, lastname, email, password, department_id) values (?, ?, ?, ?, ?, ?)`,
      [
        candidate.id,
        candidate.firstname,
        candidate.lastname,
        candidate.email,
        candidate.password,
        candidate.department_id,
      ]
    );

    return result.insertId;
  }

  async readById(id) {
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

module.exports = CandidateManager;
