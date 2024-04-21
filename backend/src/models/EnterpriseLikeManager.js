const AbstractManager = require("./AbstractManager");

class EnterpriseLikeManager extends AbstractManager {
  constructor() {
    super({ table: "enterprise_like" });
  }

  async create({ resumeId, enterpriseId }) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (resume_id, enterprise_id) values (?,?)`,
      [resumeId, enterpriseId]
    );

    // Return the ID of the newly inserted item
    return rows.insertId;
  }
}

module.exports = EnterpriseLikeManager;
