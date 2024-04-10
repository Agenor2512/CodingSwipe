const AbstractManager = require("./AbstractManager");

class JobOfferManager extends AbstractManager {
  constructor() {
    super({ table: "job_offer" });
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `select e.name, e.id, a.appetence, ct.contract_type, wr.work_rhythm, e.description from ${this.table} jb
      inner join enterprise e on jb.enterprise_id = e.id
      inner join work_rhythms wr on jb.work_rhythms_id = wr.id
      inner join contract_types ct on jb.contract_types_id = ct.id
      inner join appetences a on jb.appetences_id = a.id
      where e.id = ?`,
      [id]
    );
    return rows;
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
}

module.exports = JobOfferManager;
