const AbstractManager = require("./AbstractManager");

class EnterpriseLikeManager extends AbstractManager {
  constructor() {
    super({ table: "enterprise_like" });
  }

  async create({ candidateId, enterpriseId }) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (candidate_id, enterprise_id) values (?,?)`,
      [candidateId, enterpriseId]
    );

    // Return the ID of the newly inserted item
    return rows.insertId;
  }
}

module.exports = EnterpriseLikeManager;
