const { v4: generateRandomUUID } = require("uuid");

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
    const id = generateRandomUUID();
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (id, name, siret, description, email, password, department_id, legal_status_id, business_sectors_id) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        enterpriseInfo.name,
        enterpriseInfo.siretNumber,
        enterpriseInfo.description,
        enterpriseInfo.email,
        enterpriseInfo.hashedPassword,
        enterpriseInfo.department.id,
        enterpriseInfo.legalStatus.id,
        enterpriseInfo.businessSector.id,
      ]
    );
    return rows;
  }
}

module.exports = EnterpriseManager;
