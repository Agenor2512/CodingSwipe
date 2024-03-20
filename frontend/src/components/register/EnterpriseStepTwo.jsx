/* eslint-disable react/prop-types */
import "../../styles/register/enterpriseStepTwo.css";

function EnterpriseStepTwo({
  formTools: {
    handleFormSubmit,
    registerEnterprise,
    handleChangeForm,
    setEnterpriseInfos,
  },
}) {
  const enterpriseType = [
    {
      id: 0,
      text: "EI - Entrepreneur individuel",
    },
    {
      id: 1,
      text: "EURL - Entreprise unipersonnelle à responsabilité limitée",
    },
    {
      id: 2,
      text: "SARL - Société à responsabilité limitée",
    },
    {
      id: 3,
      text: "SASU - Société par actions simplifiée unipersonnelle",
    },
    {
      id: 4,
      text: "SAS - Société par actions simplifiée",
    },
    {
      id: 5,
      text: "SA - Société anonyme",
    },
    {
      id: 6,
      text: "SNC - Société en nom collectif",
    },
    {
      id: 7,
      text: "SCS - Société en commandite simple",
    },
    {
      id: 8,
      text: "SCA - Société en commandite par actions",
    },
  ];

  const industries = [
    {
      id: 0,
      text: "Services financiers",
    },
    {
      id: 1,
      text: "Santé et sciences de la vie",
    },
    {
      id: 2,
      text: "Énergie",
    },
    {
      id: 3,
      text: "Industrie manufacturière",
    },
    {
      id: 4,
      text: "Commerce de détail et de gros",
    },
    {
      id: 5,
      text: "Alimentation et boissons",
    },
    {
      id: 6,
      text: "Transport et logistique",
    },
    {
      id: 7,
      text: "Immobilier",
    },
    {
      id: 8,
      text: "Éducation",
    },
    {
      id: 9,
      text: "Divertissement et médias",
    },
    {
      id: 10,
      text: "Services professionnels",
    },
    {
      id: 11,
      text: "Tourisme et hôtellerie",
    },
    {
      id: 12,
      text: "Industrie extractive",
    },
    {
      id: 13,
      text: "Télécommunications",
    },
    {
      id: 14,
      text: "Environnement et durabilité",
    },
    {
      id: 15,
      text: "Sport et loisirs",
    },
    {
      id: 16,
      text: "Mode et habillement",
    },
    {
      id: 17,
      text: "Biens de consommation",
    },
    {
      id: 18,
      text: "Services gouvernementaux et publics",
    },
    {
      id: 19,
      text: "Technologie de l'information et des communications (TIC)",
    },
  ];
  const appetences = [
    {
      id: 1,
      buttonText: "Frontend",
    },
    {
      id: 2,
      buttonText: "Backend",
    },
    {
      id: 3,
      buttonText: "Full Stack",
    },
  ];
  const contractType = [
    {
      id: 1,
      text: "Un CDI",
    },
    {
      id: 2,
      text: "Un CDD",
    },
    {
      id: 3,
      text: "Un Stage / Une Alternance",
    },
    {
      id: 4,
      text: "Du freelance",
    },
  ];

  const workRhythm = [
    {
      id: 1,
      text: "Sur site",
    },
    {
      id: 2,
      text: "Remote partiel",
    },
    {
      id: 3,
      text: "Full remote",
    },
  ];

  const programmingLanguages = [
    {
      id: 1,
      text: "HTML/CSS",
    },
    {
      id: 2,
      text: "JavaScript",
    },
    {
      id: 3,
      text: "Python",
    },
    {
      id: 4,
      text: "Java",
    },
    {
      id: 5,
      text: "Ruby On Rails",
    },
    {
      id: 6,
      text: "Vue.js",
    },
    {
      id: 7,
      text: "Swift",
    },
    {
      id: 8,
      text: "Kotlin",
    },
    {
      id: 9,
      text: "Flutter",
    },
    {
      id: 10,
      text: "Go",
    },
    {
      id: 11,
      text: "C#",
    },
    {
      id: 12,
      text: "C++",
    },
    {
      id: 13,
      text: "React",
    },
    {
      id: 14,
      text: "Angular",
    },
    {
      id: 15,
      text: "Node.js",
    },
    {
      id: 16,
      text: "PHP",
    },
    {
      id: 17,
      text: "Rust",
    },
    {
      id: 18,
      text: ".NET Core / .NET 5",
    },
    {
      id: 19,
      text: "SQL",
    },
    {
      id: 20,
      text: "NoSQL",
    },
  ];

  const fillLanguagesArray = (event) => {
    const { value, checked } = event.target;
    setEnterpriseInfos((prevInfos) => {
      if (checked) {
        const updatedLanguages = [...prevInfos.languages, value];
        return { ...prevInfos, languages: updatedLanguages };
      }
      const filteredLanguages = prevInfos.languages.filter(
        (language) => language !== value
      );
      return { ...prevInfos, languages: filteredLanguages };
    });
  };

  // const handleFormChange = (key, { target: { value } }) => {
  //   setInfos({
  //     ...infos,
  //     [key]: value,
  //   });
  // };

  // const registerThenRedirect = () => {
  //   // FIXME: Pour l'instant, on ne gère pas le département, le secteur d'activité et le statut juridique
  //   // A la place, on met des ID en dur...
  //   const requestBody = { ...infos };
  //   addUser({ ...requestBody });
  //   nextStep();
  // };

  return (
    <div className="enterprise_form_container">
      <form className="step_two_enterprise_form" onSubmit={handleFormSubmit}>
        <h1>Créer Un Compte</h1>
        <section className="subtitle">
          <div className="squareSubtitle"> </div>
          <p>
            ETAPE 2 <span>- </span>
            Répondez à ces quelques questions
          </p>
        </section>

        <label htmlFor="enterprise-type-select">
          Type d'entreprise <span>:</span>
        </label>
        <select
          name="enterprise-type"
          id="enterprise-type-select"
          onChange={handleChangeForm}
        >
          <option value="choose-enterprise-type">
            Veuillez choisir la forme juridique de votre entreprise
          </option>
          {enterpriseType.map(({ id, text }) => (
            <option key={id} value={id}>
              {text}
            </option>
          ))}
        </select>

        <label htmlFor="industries-select">
          Secteur d'activité <span>:</span>
        </label>
        <select
          name="industries"
          id="industries-select"
          onChange={handleChangeForm}
        >
          <option value="choose-industries">
            Veuillez choisir votre secteur d'activité
          </option>
          {industries.map(({ id, text }) => (
            <option key={id} value={id}>
              {text}
            </option>
          ))}
        </select>

        <label htmlFor="description-area">
          Description de votre entreprise <span>:</span>
        </label>
        <textarea
          required
          type="text"
          id="description-area"
          onChange={handleChangeForm}
          rows="10"
          placeholder="Sans la nommer, merci d’ajouter une description de votre entreprise (exemple : nombre de salariés, précisions concernant le secteur d’activité, date de création ...)"
        />

        <section className="levels_experience_part_container">
          <p>
            Je recherche un.e développeur·euse <span>:</span>
          </p>
          <section className="levels_and_experience_button_container">
            {appetences.map(({ id, buttonText }) => (
              <button
                type="button"
                key={id}
                name="appetencesId"
                value={id}
                onClick={handleChangeForm}
              >
                {buttonText}
              </button>
            ))}
          </section>
        </section>

        <section className="research_and_workplace_container">
          <div>
            <p>
              Je recherche <span>:</span>
            </p>
            {contractType.map(({ id, text }) => (
              <div className="enterprise_expectation_container" key={id}>
                <input
                  type="radio"
                  name="contractTypesId"
                  id={`contractType-${id}`}
                  value={id}
                  onChange={handleChangeForm}
                />
                <label htmlFor={`contractType-${id}`}>{text}</label>
              </div>
            ))}
          </div>

          <div>
            <p>
              Lieu de travail <span>:</span>
            </p>
            {workRhythm.map(({ id, text }) => (
              <div className="enterprise_workplace_container" key={id}>
                <input
                  type="radio"
                  name="workRhythmsId"
                  id={`workRhythm-${id}`}
                  value={id}
                  onChange={handleChangeForm}
                />
                <label htmlFor={`workRhythm-${id}`}>{text}</label>
              </div>
            ))}
          </div>

          <p>
            Mes langages informatiques
            <span className="select_languages_span">
              <span>{" { "}</span>
              sélectionnez au moins un langage <span>{" } "}</span>
            </span>
            <span> : </span>
          </p>
          <section className="computer_language_checkbox_container">
            {programmingLanguages.map(({ id, text }) => (
              <div key={id}>
                <input
                  type="checkbox"
                  id={`checkbox-${id}`}
                  value={id}
                  onChange={fillLanguagesArray}
                />
                <label htmlFor={`checkbox-${id}`}>{text}</label>
              </div>
            ))}
          </section>
        </section>

        <div className="salary_languages_missions_desktop">
          <section className="annual_salary">
            <h2>Salaire annuel brut</h2>
            <div>
              <label htmlFor="salary">
                Salaire <span>:</span>
              </label>
              {/* Placeholder pour SalaryAdministrator */}
            </div>
          </section>

          <button type="submit" onClick={registerEnterprise}>
            Finaliser l'inscription
          </button>
        </div>
      </form>
    </div>
  );
}

/* // EnterpriseStepTwo.propTypes = {
//   formTools: PropTypes.shape({
//     nextStep: PropTypes.func.isRequired,
//     handleFormSubmit: PropTypes.func.isRequired,
//   }).isRequired,
// }; */

export default EnterpriseStepTwo;
