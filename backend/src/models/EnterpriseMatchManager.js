const AbstractManager = require("./AbstractManager");

class EnterpriseMatchManager extends AbstractManager {
  constructor() {
    super({ table: "enterprise_like" });
  }

  async readMatchById(id) {
    const [rows] = await this.database.query(
      `select c.*, r.*, a.*
      from ${this.table} el
      inner join codingswipe.resume r on el.resume_id = r.id
      inner join codingswipe.appetences a on r.appetences_id = a.id
      inner join codingswipe.candidate c on r.candidate_id = c.id
      inner join codingswipe.candidate_like cl on c.id = cl.candidate_id
      inner join codingswipe.job_offer jo on cl.job_offer_id = jo.id
      where el.enterprise_id = jo.enterprise_id 
      and el.enterprise_id = ?`,
      [id]
    );

    return rows;
  }
}

module.exports = EnterpriseMatchManager;
