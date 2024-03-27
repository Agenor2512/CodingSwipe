const AbstractManager = require("./AbstractManager");

class CandidateLikeManager extends AbstractManager {
  constructor() {
    super({ table: "candidate_like" });
  }

  async create(like) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (likeId) values (?)`,
      [like.likedId]
    );

    // Return the ID of the newly inserted item
    return rows.insertId;
  }
}

module.exports = CandidateLikeManager;
