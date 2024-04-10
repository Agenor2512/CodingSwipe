const AbstractManager = require("./AbstractManager");

class ContractTypesManager extends AbstractManager {
  constructor() {
    super({ table: "contract_types" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = ContractTypesManager;
