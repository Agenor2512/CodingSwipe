const AbstractManager = require("./AbstractManager");

class LikeManager extends AbstractManager {
  constructor() {
    super({ table: "like" });
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

module.exports = LikeManager;
