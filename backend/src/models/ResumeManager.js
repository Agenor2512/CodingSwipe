const AbstractManager = require("./AbstractManager");

class ResumeManager extends AbstractManager {
  constructor() {
    super({ table: "resume" });
  }

  async create(resume) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, appetences_id, candidate_id, contract_types_id, work_rhythms_id, level_id) values (?, ?, ?, ?, ?, ?)`,
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

  async readById(id) {
    const [rows] = await this.database.query(
      `select c.firstname, c.lastname, c.id, r.biography, a.appetence, ct.contract_type, d.id, wr.work_rhythm from ${this.table} r
      inner join candidate c on r.candidate_id = c.id
      inner join appetences a on r.appetences_id = a.id
      inner join contract_types ct on r.contract_types_id = ct.id
      inner join departments d on c.department_id = d.id
      inner join work_rhythms wr on r.work_rhythms_id = wr.id
      inner join levels l on r.level_id = l.id
      where c.id = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = ResumeManager;
