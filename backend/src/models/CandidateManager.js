const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
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

  async createCandidate(candidate) {
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

  async createResume(resume) {
    const [result] = await this.database.query(
      `insert into resume (id, biography, appetences_id, candidate_id, contract_types_id, work_rhythms_id, level_id) values (?, ?, ?, ?, ?, ? , ?)`,
      [
        resume.randomId,
        resume.biography,
        resume.appetencesId,
        resume.candidateId,
        resume.contractTypesId,
        resume.workRhythmsId,
        resume.levelId,
      ]
    );

    return result;
  }

  async createProgrammingLanguages(resumeId, programmingLanguagesId) {
    const [result] = await this.database.query(
      `insert into resume_has_programming_languages (resume_id, programming_languages_id) values (?,?)`,
      [resumeId, programmingLanguagesId]
    );
    return result;
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email=?`,
      [email]
    );
    return rows;
  }
}

module.exports = CandidateManager;
