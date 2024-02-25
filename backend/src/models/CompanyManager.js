const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async create(companyInfo) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (name, siret, legal_status, business_sector, description) VALUE (?, ?, ?, ?, ?)`,
      [
        companyInfo.name,
        companyInfo.siret,
        companyInfo.legal_status,
        companyInfo.business_sector,
        companyInfo.description,
      ]
    );
    return rows;
  }
}

module.exports = CompanyManager;
