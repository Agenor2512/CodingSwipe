/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import readAllDepartments from "../../services/departmentsService";

import "../../styles/register/registerStepOne.css";

function EnterpriseStepOne({
  formTools: {
    nextStep,
    handleFormSubmit,
    handleChangeFormEnterprise,
    enterpriseInfos,
    isError,
  },
}) {
  const [formIsFill, setFormIsFill] = useState(false);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    readAllDepartments().then((allDepartments) =>
      setDepartments(allDepartments)
    );
    if (
      enterpriseInfos.name &&
      enterpriseInfos.siret &&
      enterpriseInfos.email &&
      enterpriseInfos.departmentId &&
      enterpriseInfos.password
    ) {
      setFormIsFill(true);
    } else {
      setFormIsFill(false);
    }
  }, [enterpriseInfos]);

  return (
    <div className="step_one_register">
      <h1>Créer Un Compte</h1>
      <form onSubmit={handleFormSubmit}>
        <h3>
          <div className="square"> </div> ETAPE 1 <span> - </span> Remplissez ce
          formulaire
        </h3>

        <div className="step_one_register_container">
          <div className="register_label_input_container">
            <label htmlFor="enterpriseName">Nom de l'entreprise</label>
            <input
              type="text"
              minLength={1}
              name="name"
              id="name"
              onChange={handleChangeFormEnterprise}
              placeholder="Windy Corporation"
              required
            />
          </div>

          <div className="register_label_input_container">
            <label htmlFor="siretNumber">Numéro Siret</label>
            <input
              type="number"
              min={0}
              name="siret"
              id="siret"
              onChange={handleChangeFormEnterprise}
              placeholder="exemple: 12345678901234"
              required
            />
          </div>
        </div>

        <div className="step_one_register_container">
          <div className="register_label_input_container">
            <label htmlFor="emailCompany">Email</label>
            <input
              type="email"
              name="email"
              id="emailCompany"
              onChange={handleChangeFormEnterprise}
              placeholder="exemple@gmail.com"
              required
            />
          </div>

          <div className="register_label_input_container">
            <label htmlFor="department">Département</label>
            <select
              id="department"
              name="departmentId"
              required
              onChange={handleChangeFormEnterprise}
            >
              <option value="">Veuillez choisir votre département</option>
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.department}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="step_one_register_container">
          <div className="register_label_input_container">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              minLength={8}
              name="password"
              id="password"
              onChange={handleChangeFormEnterprise}
              placeholder="Saisissez un mot de passe"
              required
            />
          </div>

          <div className="register_label_input_container">
            <label htmlFor="passwordCheck">Vérification du mot de passe</label>
            <input
              type="password"
              minLength={8}
              name="passwordCheck"
              id="passwordCheck"
              placeholder="Vérifiez votre mot de passe"
              required
            />
          </div>
        </div>
        <p>{isError ? "Remplissez tous les champs" : ""}</p>
        <button type="submit" onClick={formIsFill ? () => nextStep() : null}>
          Continuer
        </button>
      </form>
    </div>
  );
}

EnterpriseStepOne.propTypes = {
  formTools: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    handleChangeFormEnterprise: PropTypes.func.isRequired,
    enterpriseInfos: PropTypes.shape({
      name: PropTypes.string.isRequired,
      siret: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      departmentId: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }).isRequired,
    isError: PropTypes.bool.isRequired,
  }).isRequired,
};

export default EnterpriseStepOne;
