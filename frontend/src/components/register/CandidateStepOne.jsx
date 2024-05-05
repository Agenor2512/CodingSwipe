import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import readAllDepartments from "../../services/departmentsService";

import "../../styles/register/registerStepOne.css";

function CandidateStepOne({
  formTools: {
    nextStep,
    handleFormSubmit,
    handleChangeFormCandidate,
    candidateInfos,
    formIsFilled,
    setFormIsFilled,
  },
}) {
  console.info("CONSOLE INFO DE LA STEP ONE :", candidateInfos);

  const [departments, setDepartments] = useState([]);

  const validatePassword = () => {
    const pattern =
      /(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%&*])[a-zA-Z0-9À-ÖØ-öø-ÿ*#].{8,15}/;
    return pattern.test(candidateInfos.password);
  };

  useEffect(() => {
    readAllDepartments().then((allDepartments) =>
      setDepartments(allDepartments)
    );
    if (
      candidateInfos.firstname &&
      candidateInfos.lastname &&
      candidateInfos.password &&
      candidateInfos.passwordCheck &&
      candidateInfos.email &&
      candidateInfos.departmentId &&
      candidateInfos.password === candidateInfos.passwordCheck &&
      validatePassword()
    ) {
      setFormIsFilled(true);
    } else {
      setFormIsFilled(false);
    }
  }, [candidateInfos]);

  console.info("LE FORMULAIRE EST REMPLI ?", formIsFilled);

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
            <label htmlFor="candidate_lastname">Nom</label>
            <input
              type="text"
              minLength={3}
              name="lastname"
              id="candidate_lastname"
              placeholder="Doe"
              required
              onChange={handleChangeFormCandidate}
            />
          </div>

          <div className="register_label_input_container">
            <label htmlFor="candidate_firstame">Prénom</label>
            <input
              type="text"
              minLength={3}
              name="firstname"
              id="candidate_firstame"
              placeholder="John"
              required
              onChange={handleChangeFormCandidate}
            />
          </div>
        </div>

        <div className="step_one_register_container">
          <div className="register_label_input_container">
            <label htmlFor="email_candidate">Email</label>
            <input
              type="email"
              name="email"
              id="email_candidate"
              placeholder="exemple@gmail.com"
              required
              onChange={handleChangeFormCandidate}
            />
          </div>
          <div className="register_label_input_container">
            <label htmlFor="department">Département</label>
            <select
              id="department"
              name="departmentId"
              onChange={handleChangeFormCandidate}
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
              name="password"
              id="password"
              placeholder="Saisissez un mot de passe"
              pattern="(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%&*])[a-zA-Z0-9À-ÖØ-öø-ÿ*#].{8,15}"
              title="Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, un chiffre et un caractère spécial."
              required
              onChange={handleChangeFormCandidate}
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
              onChange={handleChangeFormCandidate}
            />
          </div>
        </div>
        <p>{formIsFilled ? "" : "Remplissez tous les champs"}</p>

        <button
          type="submit"
          className={formIsFilled ? "" : "invisible"}
          onClick={formIsFilled ? () => nextStep() : null}
        >
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
    handleChangeFormCandidate: PropTypes.func.isRequired,
    candidateInfos: PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      passwordCheck: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      departmentId: PropTypes.string.isRequired,
    }).isRequired,
    formIsFilled: PropTypes.bool.isRequired,
    setFormIsFilled: PropTypes.func.isRequired,
  }).isRequired,
};

export default CandidateStepOne;
