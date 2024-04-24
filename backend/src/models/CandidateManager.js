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
    const [rows] = await this.database.query(
      `insert into ${this.table} (id, firstname, lastname, email, password, department_id) values (?, ?, ?, ?, ?, ?)`,
      [
        candidate.randomId,
        candidate.firstname,
        candidate.lastname,
        candidate.email,
        candidate.password,
        candidate.departmentId,
      ]
    );

    return rows;
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select * FROM ${this.table} where email = ?`,
      [email]
    );
    return rows;
  }

  async readRandom(id) {
    const [rows] = await this.database.query(
      `select c.id from ${this.table} c
      inner join resume r on c.id = r.candidate_id
      left join enterprise_like el on r.id = el.resume_id
      where el.enterprise_id is null or el.enterprise_id != ? limit 1`,
      [id]
    );
    return rows[0];
  }
}

module.exports = CandidateManager;
