const AbstractManager = require("./AbstractManager");

class ExperienceManager extends AbstractManager {
  constructor() {
    super({ table: "experiences" });
  }
  
  async create(infos) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (candidate_id, job_title, company, experiences) values (?, ?, ?, ?)`,
      [infos.candidateId, infos.jobTitle, infos.company, infos.experience]
    );
    return rows;
  }
  
  async readById(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where candidate_id = ?`,
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

module.exports = ExperienceManager;
