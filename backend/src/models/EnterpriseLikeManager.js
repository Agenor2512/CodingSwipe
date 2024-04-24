const AbstractManager = require("./AbstractManager");

class EnterpriseLikeManager extends AbstractManager {
  constructor() {
    super({ table: "enterprise_like" });
  }

  async create({ resumeId, enterpriseId }) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (resume_id, enterprise_id) values (?,?)`,
      [resumeId, enterpriseId]
    );

    // Return the ID of the newly inserted item
    return rows.insertId;
  }

  async readMatchById(id) {
    const [rows] = await this.database.query(
      `select c.firstname, a.appetence, ct.contract_type
      from ${this.table} el
      inner join resume r on el.resume_id = r.id
      inner join appetences a on r.appetences_id = a.id
      inner join candidate c on r.candidate_id = c.id
      inner join contract_types ct on r.contract_types_id = ct.id
      inner join candidate_like cl on c.id = cl.candidate_id
      inner join job_offer jo on cl.job_offer_id = jo.id
      where el.enterprise_id = jo.enterprise_id 
      and el.enterprise_id = ?`,
      [id]
    );

    return rows;
  }
}

module.exports = EnterpriseLikeManager;
