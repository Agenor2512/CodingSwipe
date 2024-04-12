const AbstractManager = require("./AbstractManager");

class JobOfferManager extends AbstractManager {
  constructor() {
    super({ table: "job_offer" });
  }

  async create(jobOffer) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, salary, contract_types_id, work_rhythms_id, appetences_id, enterprise_id) value (?, ?, ?, ?, ?, ?)`,
      [
        jobOffer.randomId,
        jobOffer.salary,
        jobOffer.contractTypesId,
        jobOffer.workRhythmsId,
        jobOffer.appetencesId,
        jobOffer.enterpriseId,
      ]
    );
    return result;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `select e.id, e.name, e.description, jb.salary, a.appetence, ct.contract_type, d.department, wr.work_rhythm from ${this.table} jb
      inner join enterprise e on jb.enterprise_id = e.id
      inner join work_rhythms wr on jb.work_rhythms_id = wr.id
      inner join contract_types ct on jb.contract_types_id = ct.id
      inner join departments d on e.department_id = d.id
      inner join appetences a on jb.appetences_id = a.id
      where e.id = ?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = JobOfferManager;
