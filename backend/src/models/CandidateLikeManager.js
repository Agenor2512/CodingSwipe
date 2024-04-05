const AbstractManager = require("./AbstractManager");

class CandidateLikeManager extends AbstractManager {
  constructor() {
    super({ table: "candidate_like" });
  }

  async create({ enterpriseId, candidateId }) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (enterprise_id, candidate_id) values (?,?)`,
      [enterpriseId, candidateId]
    );

    // Return the ID of the newly inserted item
    return rows.insertId;
  }
}

module.exports = CandidateLikeManager;
