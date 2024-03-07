const { v4: generateRandomUUID } = require("uuid");

const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  async create(candidate) {
    const id = generateRandomUUID();

    const [result] = await this.database.query(
      `insert into ${this.table} (id, lastname, firstname, email, password, department_id) values (?, ?, ?, ?, ?, ?)`,
      [
        id,
        candidate.lastname,
        candidate.firstname,
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
