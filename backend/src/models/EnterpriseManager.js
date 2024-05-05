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

  async create(enterprise) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (id, name, siret, description, email, password, department_id, legal_status_id, business_sectors_id) value (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
    return rows;
  }

  async readRandom(id) {
    const [rows] = await this.database.query(
      `select e.id from ${this.table} e
      inner join job_offer jo on e.id = jo.enterprise_id
      left join candidate_like cl on jo.id = cl.job_offer_id and cl.candidate_id = ?
      where cl.candidate_id is null limit 1`,
      [id]
    );
    return rows[0];
  }

  async readDescriptionById(id) {
    const [rows] = await this.database.query(
      `select description from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async updateDescriptionById(jobOffer) {
    const [rows] = await this.database.query(
      `update ${this.table} set description = ? where id = ?`,
      [jobOffer.description, jobOffer.id]
    );
    return rows;
  }
}

module.exports = EnterpriseManager;
