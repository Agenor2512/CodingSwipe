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
    formIsFilled,
    setFormIsFilled,
  },
}) {
  const [departments, setDepartments] = useState([]);
  // const [isPasswordMatching, setIsPasswordMatching] = useState(false);

  const validatePassword = () => {
    const pattern =
      /(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%&*])[a-zA-Z0-9À-ÖØ-öø-ÿ*#].{8,15}/;
    return pattern.test(enterpriseInfos.password);
  };

  useEffect(() => {
    readAllDepartments().then((allDepartments) =>
      setDepartments(allDepartments)
    );
    if (
      enterpriseInfos.name &&
      enterpriseInfos.siret &&
      enterpriseInfos.email &&
      enterpriseInfos.departmentId &&
      enterpriseInfos.password &&
      enterpriseInfos.passwordCheck &&
      enterpriseInfos.password === enterpriseInfos.passwordCheck &&
      validatePassword()
    ) {
      setFormIsFilled(true);
    } else {
      setFormIsFilled(false);
    }
  }, [enterpriseInfos]);

  console.info("LE FORMULAIRE EST REMPLI ?", formIsFilled);

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
              minLength={3}
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
              name="siret"
              min={14}
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
              name="password"
              id="password"
              placeholder="Saisissez un mot de passe"
              pattern="(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%&*])[a-zA-Z0-9À-ÖØ-öø-ÿ*#].{8,15}"
              title="Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, un chiffre et un caractère spécial."
              required
              onChange={handleChangeFormEnterprise}
            />
          </div>

          <div className="register_label_input_container">
            <label htmlFor="passwordCheck">Vérification du mot de passe</label>
            <input
              type="password"
              name="passwordCheck"
              id="passwordCheck"
              placeholder="Vérifiez votre mot de passe"
              pattern="(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%&*])[a-zA-Z0-9À-ÖØ-öø-ÿ*#].{8,15}"
              title="Le mot de passe ne correspond pas à celui entré précédemment."
              required
              onChange={handleChangeFormEnterprise}
            />
          </div>
        </div>
        <p>{formIsFilled ? "" : "Remplissez tous les champs"}</p>
        <button
          type="submit"
          onClick={formIsFilled ? () => nextStep() : null}
          className={formIsFilled ? "" : "invisible"}
        >
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
      siret: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      departmentId: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      passwordCheck: PropTypes.string.isRequired,
    }).isRequired,
    formIsFilled: PropTypes.bool.isRequired,
    setFormIsFilled: PropTypes.func.isRequired,
  }).isRequired,
};

export default EnterpriseStepOne;
