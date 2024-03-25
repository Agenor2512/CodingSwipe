/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import "../../styles/register/registerStepOne.css";

function CandidateStepOne({
  formTools: { nextStep, handleFormSubmit, handleChangeForm, candidateInfos },
}) {
  console.info("CONSOLE INFO DE LA STEP ONE :", candidateInfos);

  const [formIsFill, setFormIsFill] = useState(false);

  useEffect(() => {
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

  const departements = [
    {
      id: 1,
      text: "01 - Ain",
    },
    {
      id: 2,
      text: "02 - Aisne",
    },
    {
      id: 3,
      text: "03 - Allier",
    },
    {
      id: 4,
      text: "04 - Alpes-de-Haute-Provence",
    },
    {
      id: 5,
      text: "05 - Hautes-Alpes",
    },
    {
      id: 6,
      text: "06 - Alpes-Maritimes",
    },
    {
      id: 7,
      text: "07 - Ardèche",
    },
    {
      id: 8,
      text: "08 - Ardennes",
    },
    {
      id: 9,
      text: "09 - Ariège",
    },
    {
      id: 10,
      text: "10 - Aube",
    },
    {
      id: 11,
      text: "11 - Aude",
    },
    {
      id: 12,
      text: "12 - Aveyron",
    },
    {
      id: 13,
      text: "13 - Bouches-du-Rhône",
    },
    {
      id: 14,
      text: "14 - Calvados",
    },
    {
      id: 15,
      text: "15 - Cantal",
    },
    {
      id: 16,
      text: "16 - Charente",
    },
    {
      id: 17,
      text: "17 - Charente-Maritime",
    },
    {
      id: 18,
      text: "18 - Cher",
    },
    {
      id: 19,
      text: "19 - Corrèze",
    },
    {
      id: 21,
      text: "21 - Côte-d'Or",
    },
    {
      id: 22,
      text: "22 - Côtes-d'Armor",
    },
    {
      id: 23,
      text: "23 - Côte-d'Or",
    },
    {
      id: 24,
      text: "24 - Dordogne",
    },
    {
      id: 25,
      text: "25 - Doubs",
    },
    {
      id: 26,
      text: "26 - Drôme",
    },
    {
      id: 27,
      text: "27 - Eure",
    },
    {
      id: 28,
      text: "28 - Eure-et-Loir",
    },
    {
      id: 29,
      text: "29 - Finistère",
    },
    {
      id: 30,
      text: "30 - Gard",
    },
    {
      id: 31,
      text: "31 - Haute-Garonne",
    },
    {
      id: 32,
      text: "32 - Gers",
    },
    {
      id: 33,
      text: "33 - Gironde",
    },
    {
      id: 34,
      text: "34 - Hérault",
    },
    {
      id: 35,
      text: "35 - Ille-et-Vilaine",
    },
    {
      id: 36,
      text: "36 - Indre",
    },
    {
      id: 37,
      text: "37 - Indre-et-Loire",
    },
    {
      id: 38,
      text: "38 - Isère",
    },
    {
      id: 39,
      text: "39 - Jura",
    },
    {
      id: 40,
      text: "40 - Landes",
    },
    {
      id: 41,
      text: "41 - Loir-et-Cher",
    },
    {
      id: 42,
      text: "42 - Loire",
    },
    {
      id: 43,
      text: "43 - Haute-Loire",
    },
    {
      id: 44,
      text: "44 - Loire-Atlantique",
    },
    {
      id: 45,
      text: "45 - Loiret",
    },
    {
      id: 46,
      text: "46 - Lot",
    },
    {
      id: 47,
      text: "47 - Lot-et-Garonne",
    },
    {
      id: 48,
      text: "48 - Lozère",
    },
    {
      id: 49,
      text: "49 - Maine-et-Loire",
    },
    {
      id: 50,
      text: "50 - Manche",
    },
    {
      id: 51,
      text: "51 - Marne",
    },
    {
      id: 52,
      text: "52 - Haute-Marne",
    },
    {
      id: 53,
      text: "53 - Mayenne",
    },
    {
      id: 54,
      text: "54 - Meurthe-et-Moselle",
    },
    {
      id: 55,
      text: "55 - Meuse",
    },
    {
      id: 56,
      text: "56 - Morbihan",
    },
    {
      id: 57,
      text: "57 - Moselle",
    },
    {
      id: 58,
      text: "58 - Nièvre",
    },
    {
      id: 59,
      text: "59 - Nord",
    },
    {
      id: 60,
      text: "60 - Oise",
    },
    {
      id: 61,
      text: "61 - Orne",
    },
    {
      id: 62,
      text: "62 - Pas-de-Calais",
    },
    {
      id: 63,
      text: "63 - Puy-de-Dôme",
    },
    {
      id: 64,
      text: "64 - Pyrénées-Atlantiques",
    },
    {
      id: 65,
      text: "65 - Hautes-Pyrénées",
    },
    {
      id: 66,
      text: "66 - Pyrénées-Orientales",
    },
    {
      id: 67,
      text: "67 - Bas-Rhin",
    },
    {
      id: 68,
      text: "68 - Haut-Rhin",
    },
    {
      id: 69,
      text: "69 - Rhône",
    },
    {
      id: 70,
      text: "70 - Haute-Saône",
    },
    {
      id: 71,
      text: "71 - Saône-et-Loire",
    },
    {
      id: 72,
      text: "72 - Sarthe",
    },
    {
      id: 73,
      text: "73 - Savoie",
    },
    {
      id: 74,
      text: "74 - Haute-Savoie",
    },
    {
      id: 75,
      text: "75 - Paris",
    },
    {
      id: 76,
      text: "76 - Seine-Maritime",
    },
    {
      id: 77,
      text: "77 - Seine-et-Marne",
    },
    {
      id: 78,
      text: "78 - Yvelines",
    },
    {
      id: 79,
      text: "79 - Deux-Sèvres",
    },
    {
      id: 80,
      text: "80 - Somme",
    },
    {
      id: 81,
      text: "81 - Tarn",
    },
    {
      id: 82,
      text: "82 - Tarn-et-Garonne",
    },
    {
      id: 83,
      text: "83 - Var",
    },
    {
      id: 84,
      text: "84 - Vaucluse",
    },
    {
      id: 85,
      text: "85 - Vendée",
    },
    {
      id: 86,
      text: "86 - Vienne",
    },
    {
      id: 87,
      text: "87 - Haute-Vienne",
    },
    {
      id: 88,
      text: "88 - Vosges",
    },
    {
      id: 89,
      text: "89 - Yonne",
    },
    {
      id: 90,
      text: "90 - Territoire de Belfort",
    },
    {
      id: 91,
      text: "91 - Essonne",
    },
    {
      id: 92,
      text: "92 - Hauts-de-Seine",
    },
    {
      id: 93,
      text: "93 - Seine-Saint-Denis",
    },
    {
      id: 94,
      text: "94 - Val-de-Marne",
    },
    {
      id: 95,
      text: "95 - Val-d'Oise",
    },
    {
      id: 96,
      text: "971 - Guadeloupe",
    },
    {
      id: 97,
      text: "972 - Martinique",
    },
    {
      id: 98,
      text: "973 - Guyane",
    },
    {
      id: 99,
      text: "974 - La Réunion",
    },
    {
      id: 100,
      text: "976 - Mayotte",
    },
    {
      id: 101,
      text: "2A - Corse-du-Sud",
    },
    {
      id: 102,
      text: "2B - Haute-Corse",
    },
  ];

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
              {departements.map(({ id, text }) => (
                <option key={id} value={id}>
                  {text}
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

        <button type="submit" onClick={formIsFill ? () => nextStep() : null}>
          Continuer
        </button>
      </form>
    </div>
  );
}

export default CandidateStepOne;
