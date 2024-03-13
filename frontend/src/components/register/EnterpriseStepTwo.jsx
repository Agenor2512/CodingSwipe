import React, { useContext } from "react";

import PropTypes from "prop-types";

import RegisterContext from "../../context/RegisterContext";

import { addUser } from "../../services/usersService";

import "../../styles/register/enterpriseStepTwo.css";

function EnterpriseStepTwo({ formTools: { nextStep, handleFormSubmit } }) {
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

  const { infos, setInfos } = useContext(RegisterContext);

  const handleFormChange = (key, { target: { value } }) => {
    setInfos({
      ...infos,
      [key]: value,
    });
  };

  const registerThenRedirect = () => {
    // FIXME: Pour l'instant, on ne gère pas le département, le secteur d'activité et le statut juridique
    // A la place, on met des ID en dur...
    const requestBody = { ...infos };
    addUser({ ...requestBody });
    nextStep();
  };

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
          onChange={(event) => handleFormChange("legalStatus", event)}
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
          onChange={(event) => handleFormChange("businessSector", event)}
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
          onChange={(event) => handleFormChange("description", event)}
          rows="10"
          placeholder="Sans la nommer, merci d’ajouter une description de votre entreprise (exemple : nombre de salariés, précisions concernant le secteur d’activité, date de création ...)"
        />
        <button type="submit" onClick={registerThenRedirect}>
          Finaliser l'inscription
        </button>
      </form>
    </div>
  );
}

EnterpriseStepTwo.propTypes = {
  formTools: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
  }).isRequired,
};

export default EnterpriseStepTwo;
