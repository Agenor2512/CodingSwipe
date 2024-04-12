const AbstractManager = require("./AbstractManager");

class ResumeHasProgrammingLanguagesManager extends AbstractManager {
  constructor() {
    super({ table: "resume_has_programming_languages" });
  }

  async create(resumeId, programmingLanguagesId) {
    const [result] = await this.database.query(
      `insert into ${this.table} (resume_id, programming_languages_id) values (?, ?)`,
      [resumeId, programmingLanguagesId]
    );

    return result;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `select programming_languages_id, programming_language from ${this.table} rhpl
      inner join resume r on r.id = rhpl.resume_id
      inner join candidate c on c.id = r.candidate_id
      inner join programming_languages pl on pl.id = rhpl.programming_languages_id
      where c.id = ?`,
      [id]
    );

    return rows;
  }
}

module.exports = ResumeHasProgrammingLanguagesManager;
