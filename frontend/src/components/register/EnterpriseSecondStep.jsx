import React from "react";
import "../../styles/enterpriseSecondStep.css";

function EnterpriseSecondStep() {
  const enterpriseType = [
    {
      key: "EI",
      text: "EI - Entrepreneur individuel",
    },
    {
      key: "EURL",
      text: "EURL - Entreprise unipersonnelle à responsabilité limitée",
    },
    {
      key: "SARL",
      text: "SARL - Société à responsabilité limitée",
    },
    {
      key: "SASU",
      text: "SASU - Société par actions simplifiée unipersonnelle",
    },
    {
      key: "SAS",
      text: "SAS - Société par actions simplifiée",
    },
    {
      key: "SA",
      text: "SA - Société anonyme",
    },
    {
      key: "SNC",
      text: "SNC - Société en nom collectif",
    },
    {
      key: "SCS",
      text: "SCS - Société en commandite simple",
    },
    {
      key: "SCA",
      text: "SCA - Société en commandite par actions",
    },
  ];

  const industries = [
    {
      key: "financial-services",
      text: "Services financiers",
    },
    {
      key: "health",
      text: "Santé et sciences de la vie",
    },
    {
      key: "energy",
      text: "Énergie",
    },
    {
      key: "manufacturing-industry",
      text: "Industrie manufacturière",
    },
    {
      key: "retail",
      text: "Commerce de détail et de gros",
    },
    {
      key: "food",
      text: "Alimentation et boissons",
    },
    {
      key: "transport-logistics",
      text: "Transport et logistique",
    },
    {
      key: "real-estate",
      text: "Immobilier",
    },
    {
      key: "education",
      text: "Éducation",
    },
    {
      key: "entertainment",
      text: "Divertissement et médias",
    },
    {
      key: "professional-services",
      text: "Services professionnels",
    },
    {
      key: "tourism",
      text: "Tourisme et hôtellerie",
    },
    {
      key: "extractive-industry",
      text: "Industrie extractive",
    },
    {
      key: "telecommunications",
      text: "Télécommunications",
    },
    {
      key: "environment",
      text: "Environnement et durabilité",
    },
    {
      key: "sport",
      text: "Sport et loisirs",
    },
    {
      key: "fashion",
      text: "Mode et habillement",
    },
    {
      key: "consumer-goods",
      text: "Biens de consommation",
    },
    {
      key: "government-services",
      text: "Services gouvernementaux et publics",
    },
    {
      key: "information-technology",
      text: "Technologie de l'information et des communications (TIC)",
    },
  ];

  return (
    <div className="enterprise_form_container">
      <form className="step_two_enterprise_form">
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
        <select name="enterprise-type" id="enterprise-type-select">
          <option value="choose-enterprise-type">
            Veuillez choisir la forme juridique de votre entreprise
          </option>
          {enterpriseType.map(({ key, text }) => (
            <option key={key} value={text}>
              {text}
            </option>
          ))}
        </select>
        <label htmlFor="industries-select">
          Secteur d'activité <span>:</span>
        </label>
        <select name="industries" id="industries-select">
          <option value="choose-industries">
            Veuillez choisir votre secteur d'activité
          </option>
          {industries.map(({ key, text }) => (
            <option key={key} value={text}>
              {text}
            </option>
          ))}
        </select>

        <label htmlFor="description-area">
          Description de votre entreprise <span>:</span>
        </label>
        <textarea
          type="text"
          id="description-area"
          rows="10"
          placeholder="Sans la nommer, merci d’ajouter une description de votre entreprise (exemple : nombre de salariés, précisions concernant le secteur d’activité, date de création ...)"
        />
        <button type="submit">Finaliser l'inscription</button>
      </form>
    </div>
  );
}

export default EnterpriseSecondStep;
