const AbstractManager = require("./AbstractManager");

class JobOfferHasProgrammingLanguagesManager extends AbstractManager {
  constructor() {
    super({ table: "job_offer_has_programming_languages" });
  }

  async create(jobOfferId, programmingLanguagesId) {
    const [result] = await this.database.query(
      `insert into ${this.table} (job_offer_id, programming_languages_id) values (?, ?)`,
      [jobOfferId, programmingLanguagesId]
    );

    return result;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `select programming_languages_id id, programming_language from ${this.table} jbhpl
      inner join job_offer jb on jb.id = jbhpl.job_offer_id
      inner join enterprise e on e.id = jb.enterprise_id
      inner join programming_languages pl on pl.id = jbhpl.programming_languages_id
      where e.id = ?`,
      [id]
    );

    return rows;
  }
}

module.exports = JobOfferHasProgrammingLanguagesManager;
