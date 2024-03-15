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

  async create(enterpriseInfo) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (id, name, siret, description, email, password, department_id, legal_status_id, business_sectors_id) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        enterpriseInfo.id,
        enterpriseInfo.name,
        enterpriseInfo.siret,
        enterpriseInfo.description,
        enterpriseInfo.email,
        enterpriseInfo.password,
        enterpriseInfo.department_id,
        enterpriseInfo.legal_status_id,
        enterpriseInfo.business_sectors_id,
      ]
    );
    return rows;
  }
}

module.exports = EnterpriseManager;
