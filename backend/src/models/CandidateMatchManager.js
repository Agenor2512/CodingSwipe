const AbstractManager = require("./AbstractManager");

class CandidateMatchManager extends AbstractManager {
  constructor() {
    super({ table: "candidate_like" });
  }

  async readMatchById(id) {
    const [rows] = await this.database.query(
      `select e.* from ${this.table} cl
    inner join job_offer jo on cl.job_offer_id = jo.id
    inner join enterprise e on jo.enterprise_id = e.id
    inner join enterprise_like el on e.id = el.enterprise_id
    inner join resume r on el.resume_id = r.id
    where cl.candidate_id = r.candidate_id
    and cl.candidate_id = ?`,
      [id]
    );

    return rows[0];
  }
}

module.exports = CandidateMatchManager;
