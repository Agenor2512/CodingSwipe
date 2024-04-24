const AbstractManager = require("./AbstractManager");

class BusinessSectorsManager extends AbstractManager {
  constructor() {
    super({ table: "business_sectors" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = BusinessSectorsManager;
