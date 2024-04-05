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
      `insert into resume (id, appetences_id, candidate_id, contract_types_id, work_rhythms_id, level_id) values (?, ?, ?, ?, ?, ?)`,
      [
        resume.randomId,
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

  async readResumeById(id) {
    const [rows] = await this.database.query(
      `select candidate.firstname, candidate.lastname, candidate.id, resume.biography, appetences.appetence as appetence, contract_type as contract, work_rhythm as rhythm, department, level from candidate
      join resume on candidate.id = resume.candidate_id
      join appetences on resume.appetences_id = appetences.id
      join contract_types on contract_types.id = resume.contract_types_id
      join work_rhythms on work_rhythms.id = resume.work_rhythms_id
      join departments on departments.id = candidate.department_id
      join levels on levels.id = RESUME.level_id
      WHERE candidate.id = ?;`,
      [id]
    );
    return rows;
  }

  async readLanguagesById(id) {
    const [rows] = await this.database.query(
      `select programming_language as languages from candidate
      join resume on candidate.id = resume.candidate_id
      join resume_has_programming_languages on resume_has_programming_languages.resume_id = resume.id
      join programming_languages on programming_languages.id = resume_has_programming_languages.programming_languages_id
      WHERE candidate.id = ?;`,
      [id]
    );
    return rows;
  }

  async readBiographyById(id) {
    const [rows] = await this.database.query(
      `select biography from resume where candidate_id=?;`,
      [id]
    );
    return rows;
  }

  async updateBiographyById(resume) {
    const [rows] = await this.database.query(
      `UPDATE resume SET biography=? WHERE candidate_id=?;`,
      [resume.biography, resume.id]
    );
    return rows;
  }

  async randomCandidate() {
    const [rows] = await this.database.query(
      `select candidate.id from ${this.table} order by rand() limit 1`
    );
    return rows;
  }
}

module.exports = CandidateManager;
