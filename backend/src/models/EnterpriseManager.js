const AbstractManager = require("./AbstractManager");

class EnterpriseManager extends AbstractManager {
  constructor() {
    super({ table: "enterprise" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async create(enterpriseInfo) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (name, siret, legal_status, business_sector, description, email, password) VALUE (?, ?, ?, ?, ?, ?, ?)`,
      [
        enterpriseInfo.name,
        enterpriseInfo.siret,
        enterpriseInfo.legal_status,
        enterpriseInfo.business_sector,
        enterpriseInfo.description,
        enterpriseInfo.email,
        enterpriseInfo.password,
      ]
    );
    return rows;
  }
}

module.exports = EnterpriseManager;
