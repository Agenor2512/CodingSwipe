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
      `select jb.id jobOfferId, e.name, jb.description, jb.salary, a.appetence, ct.contract_type, d.department, wr.work_rhythm from ${this.table} jb
      inner join enterprise e on jb.enterprise_id = e.id
      inner join appetences a on jb.appetences_id = a.id
      inner join contract_types ct on jb.contract_types_id = ct.id
      inner join departments d on e.department_id = d.id
      inner join work_rhythms wr on jb.work_rhythms_id = wr.id     
      where e.id = ?`,
      [id]
    );
    return rows[0];
  }

  async readDescriptionById(id) {
    const [rows] = await this.database.query(
      `select description from ${this.table} where enterprise_id = ?`,
      [id]
    );
    return rows[0];
  }

  async updateDescriptionById(jobOffer) {
    const [rows] = await this.database.query(
      `update ${this.table} set description = ? where enterprise_id = ?`,
      [jobOffer.description, jobOffer.id]
    );
    return rows;
  }

  async readSalaryById(id) {
    const [rows] = await this.database.query(
      `select salary from ${this.table} where enterprise_id = ?`,
      [id]
    );
    return rows[0];
  }

  async updateSalaryById(jobOffer) {
    const [rows] = await this.database.query(
      `update ${this.table} set salary = ? where enterprise_id = ?`,
      [jobOffer.salary, jobOffer.id]
    );
    return rows;
  }
}

module.exports = JobOfferManager;
