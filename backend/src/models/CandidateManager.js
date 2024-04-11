const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async create(candidate) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, firstname, lastname, email, password, department_id) values (?,?, ?, ?, ?, ?)`,
      [
        candidate.randomId,
        candidate.firstname,
        candidate.lastname,
        candidate.email,
        candidate.password,
        candidate.departmentId,
      ]
    );

    return result.insertId;
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select * FROM ${this.table} where email = ?`,
      [email]
    );
    return rows;
  }

  async readRandom() {
    const [rows] = await this.database.query(
      `select candidate.id from ${this.table} order by rand() limit 1`
    );
    return rows;
  }
}

module.exports = CandidateManager;
