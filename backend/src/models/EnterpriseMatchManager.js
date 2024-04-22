const AbstractManager = require("./AbstractManager");

class EnterpriseMatchManager extends AbstractManager {
  constructor() {
    super({ table: "enterprise_like" });
  }

  async readMatchById(id) {
    const [rows] = await this.database.query(
      `select c.* from ${this.table} el
      inner join resume r on el.resume_id = r.id
      inner join candidate c on r.candidate_id = c.id
      inner join candidate_like cl on c.id = cl.candidate_id
      inner join job_offer jo on cl.job_offer_id = jo.id
      where el.enterprise_id = jo.enterprise_id 
      and el.enterprise_id = ?`,
      [id]
    );

    return rows[0];
  }
}

module.exports = EnterpriseMatchManager;
