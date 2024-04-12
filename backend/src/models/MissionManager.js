const AbstractManager = require("./AbstractManager");

class MissionManager extends AbstractManager {
  constructor() {
    super({ table: "missions" });
  }

  async create(infos) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (enterprise_id, missions) values (?, ?)`,
      [infos.enterpriseId, infos.mission]
    );
    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where enterprise_id = ?`,
      [id]
    );
    return rows;
  }

  async delete(id) {
    const [rows] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = MissionManager;
