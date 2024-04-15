const AbstractManager = require("./AbstractManager");

class ResumeHasSoftSkillsManager extends AbstractManager {
  constructor() {
    super({ table: "resume_has_soft_skills" });
  }

  async create(resumeId, softSkillsId) {
    const [result] = await this.database.query(
      `insert into ${this.table} (resume_id, soft_skills_id) values (?, ?)`,
      [resumeId, softSkillsId]
    );

    return result;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `select soft_skills_id, soft_skill from ${this.table} rhsk
      inner join resume r on r.id = rhsk.resume_id
      inner join candidate c on c.id = r.candidate_id
      inner join soft_skills sk on sk.id = rhsk.soft_skills_id
      where r.id = ?`,
      [id]
    );

    return rows;
  }
}

module.exports = ResumeHasSoftSkillsManager;
