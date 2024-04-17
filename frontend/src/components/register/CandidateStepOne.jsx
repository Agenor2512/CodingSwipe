import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import readAllDepartments from "../../services/departmentsService";

import "../../styles/register/registerStepOne.css";

function CandidateStepOne({
  formTools: {
    nextStep,
    handleFormSubmit,
    handleChangeForm,
    candidateInfos,
    isError,
  },
}) {
  console.info("CONSOLE INFO DE LA STEP ONE :", candidateInfos);

  const [formIsFill, setFormIsFill] = useState(false);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    readAllDepartments().then((allDepartments) =>
      setDepartments(allDepartments)
    );
    if (
      candidateInfos.firstname &&
      candidateInfos.lastname &&
      candidateInfos.password &&
      candidateInfos.email &&
      candidateInfos.departmentId
    ) {
      setFormIsFill(true);
    } else {
      setFormIsFill(false);
    }
  }, [candidateInfos]);

  console.info("LE FORMULAIRE EST REMPLI ?", formIsFill);

  return (
    <div className="step_one_register">
      <h1>Créer Un Compte</h1>
      <form onSubmit={handleFormSubmit}>
        <h3>
          <div className="square"> </div> ETAPE 1 <span>-</span> Remplissez ce
          formulaire
        </h3>

        <div className="step_one_register_container">
          <div className="register_label_input_container">
            <label htmlFor="candidate-lastname">Nom</label>
            <input
              type="text"
              minLength={3}
              name="lastname"
              id="candidate-lastname"
              placeholder="Doe"
              required
              onChange={handleChangeForm}
            />
          </div>

          <div className="register_label_input_container">
            <label htmlFor="candidate-firstame">Prénom</label>
            <input
              type="text"
              minLength={3}
              name="firstname"
              id="candidate-firstame"
              placeholder="John"
              required
              onChange={handleChangeForm}
            />
          </div>
        </div>

        <div className="step_one_register_container">
          <div className="register_label_input_container">
            <label htmlFor="email-candidate">Email</label>
            <input
              type="email"
              name="email"
              id="email-candidate"
              placeholder="exemple@gmail.com"
              required
              onChange={handleChangeForm}
            />
          </div>
          <div className="register_label_input_container">
            <label htmlFor="department">Département</label>
            <select
              id="department"
              name="departmentId"
              onChange={handleChangeForm}
              required
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
              placeholder="Saisissez un mot de passe"
              required
              onChange={handleChangeForm}
            />
          </div>
          <div className="register_label_input_container">
            <label htmlFor="password-check">Vérification du mot de passe</label>
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

CandidateStepOne.propTypes = {
  formTools: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    handleChangeForm: PropTypes.func.isRequired,
    candidateInfos: PropTypes.shape({
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      password: PropTypes.string,
      email: PropTypes.string,
      departmentId: PropTypes.number,
    }).isRequired,
    isError: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CandidateStepOne;
