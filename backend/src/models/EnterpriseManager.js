const AbstractManager = require("./AbstractManager");

class EnterpriseManager extends AbstractManager {
  constructor() {
    super({ table: "enterprise" });
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

  async createEnterprise(enterprise) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (id, name, siret, description, email, password, department_id, legal_status_id, business_sectors_id) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        enterprise.randomId,
        enterprise.name,
        enterprise.siret,
        enterprise.description,
        enterprise.email,
        enterprise.password,
        enterprise.departmentId,
        enterprise.legalStatusId,
        enterprise.businessSectorsId,
      ]
    );
    return rows;
  }

  async createJobOffer(jobOffer) {
    const [result] = await this.database.query(
      `INSERT INTO job_offer (id, salary, contract_types_id, work_rhythms_id, appetences_id, enterprise_id) VALUE (?, ?, ?, ?, ?, ?)`,
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

module.exports = EnterpriseManager;
