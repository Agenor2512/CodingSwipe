/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import "../../styles/register/candidateStepTwo.css";

function CandidateStepTwo({
  formTools: {
    handleFormSubmit,
    registerCandidate,
    handleChangeForm,
    setCandidateInfos,
    candidateInfos,
    isError,
  },
}) {
  console.info("CONSOLE INFO DE LA STEP TWO :", candidateInfos);

  const [formIsFill, setFormIsFill] = useState(false);

  useEffect(() => {
    if (
      candidateInfos.appetences &&
      candidateInfos.level &&
      candidateInfos.contractType &&
      candidateInfos.workRhythm &&
      candidateInfos.programmingLanguages
    ) {
      setFormIsFill(true);
    } else {
      setFormIsFill(false);
    }
  }, [candidateInfos]);

  console.info("LE FORMULAIRE EST REMPLI ?", formIsFill);

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

  const level = [
    {
      id: 1,
      name: "junior",
      buttonText: "Junior",
    },
    {
      id: 2,
      name: "mid-Level",
      buttonText: "Mid-level",
    },
    {
      id: 3,
      name: "senior",
      buttonText: "Senior",
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
    setCandidateInfos((prevInfos) => {
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

  return (
    <form
      action="submit"
      className="candidate_step_two_form"
      onSubmit={handleFormSubmit}
    >
      <h1>Créer Un Compte</h1>
      <section className="subtitle">
        <div className="square"> </div>
        <p>
          ÉTAPE 2 <span>- </span>Répondez à ces quelques questions
        </p>
      </section>

      <section className="levels_experience_part_container">
        <p>
          Appétences <span>:</span>
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
      </section>
      <section className="levels_experience_part_container">
        <p>
          Je suis <span>:</span>
        </p>
        <section className="levels_and_experience_button_container">
          {level.map(({ id, buttonText }) => (
            <button
              type="button"
              key={id}
              name="levelId"
              value={id}
              onClick={handleChangeForm}
            >
              {buttonText}
            </button>
          ))}
        </section>
      </section>

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
              id="checkbox"
              value={id}
              onChange={fillLanguagesArray}
            />
            <label htmlFor="checkbox">{text}</label>
          </div>
        ))}
      </section>
      <p>{isError ? "Remplissez tous les champs" : ""}</p>
      <section className="final_button_to_inscription_container">
        <input
          type="submit"
          value="Finaliser l'inscription"
          className="final_button_to_inscription"
          onClick={registerCandidate}
        />
      </section>
    </form>
  );
}

export default CandidateStepTwo;
