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

  async createProgrammingLanguages(jobOfferId, programmingLanguagesId) {
    const [result] = await this.database.query(
      `insert into job_offer_has_programming_languages (job_offer_id, programming_languages_id) values (?,?)`,
      [jobOfferId, programmingLanguagesId]
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

  async readJobOfferById(id) {
    const [rows] = await this.database.query(
      `select enterprise.name, enterprise.id, appetences.appetence as appetence, contract_type as contract, work_rhythm as rhythm, department, description from ${this.table}
      join job_offer on enterprise.id = job_offer.enterprise_id
      join appetences on job_offer.appetences_id = appetences.id
      join contract_types on contract_types.id = job_offer.contract_types_id
      join work_rhythms on work_rhythms.id = job_offer.work_rhythms_id
      join departments on departments.id = enterprise.department_id
      WHERE enterprise.id = ?`,
      [id]
    );
    return rows;
  }

  async readLanguagesById(id) {
    const [rows] = await this.database.query(
      `select programming_language as programming_languages from enterprise
      join job_offer on enterprise.id = job_offer.enterprise_id
      join job_offer_has_programming_languages on job_offer_has_programming_languages.job_offer_id = job_offer.id
      join programming_languages on programming_languages.id = job_offer_has_programming_languages.programming_languages_id
      WHERE enterprise.id = ?`,
      [id]
    );
    return rows;
  }

  async randomEnterprise() {
    const [rows] = await this.database.query(
      `select enterprise.id from ${this.table} order by rand() limit 1`
    );
    return rows;
  }
}

module.exports = EnterpriseManager;
