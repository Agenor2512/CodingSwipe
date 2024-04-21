const AbstractManager = require("./AbstractManager");

class CandidateLikeManager extends AbstractManager {
  constructor() {
    super({ table: "candidate_like" });
  }

  async create({ jobOfferId, candidateId }) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (job_offer_id, candidate_id) values (?,?)`,
      [jobOfferId, candidateId]
    );

    // Return the ID of the newly inserted item
    return rows.insertId;
  }
}

module.exports = CandidateLikeManager;
