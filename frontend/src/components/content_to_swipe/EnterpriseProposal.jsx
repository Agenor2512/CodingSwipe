function EnterpriseProposal() {
  return (
    <div className="enterprise_infos_container">
      <div className="enterprise_infos_header">
        <div>W</div>
        <h1>Développeur/Développeuse</h1>
      </div>

      <div className="modify_display_desktop">
        <div>
          <h2>Qui sommes-nous ?</h2>
        </div>

        <section className="work_proposal_container">
          <h2>Profil recherché</h2>
          <p>Description de l'entreprise</p>
          <div>
            <div>
              <p>
                Je propose <span>:</span>
              </p>
              <div />
            </div>

            <div>
              <p>
                Lieu de travail <span>:</span>
              </p>
              <div />
            </div>
          </div>
        </section>
      </div>

      <div className="salary_languages_missions_desktop">
        <section className="annual_salary">
          <h2>Salaire annuel brut</h2>
          <div>
            <label htmlFor="salary">
              Salaire <span>:</span>
            </label>
          </div>
        </section>

        <section className="computer_language_checkbox_container">
          <h2>Langages informatiques</h2>
          <div />
        </section>

        <section className="missions">
          <h2>Missions principales</h2>
          <div />
        </section>
      </div>
    </div>
  );
}

export default EnterpriseProposal;
