/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "../../styles/register/registerStepOne.css";

function EnterpriseStepOne({
  formTools: { nextStep, handleFormSubmit, handleChangeFormEnterprise },
}) {
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
      id: 20,
      text: "2A - Corse-du-Sud",
    },
    {
      id: 21,
      text: "2B - Haute-Corse",
    },
    {
      id: 22,
      text: "21 - Côte-d'Or",
    },
    {
      id: 23,
      text: "22 - Côtes-d'Armor",
    },
    {
      id: 24,
      text: "23 - Côte-d'Or",
    },
    {
      id: 25,
      text: "24 - Dordogne",
    },
    {
      id: 26,
      text: "25 - Doubs",
    },
    {
      id: 27,
      text: "26 - Drôme",
    },
    {
      id: 28,
      text: "27 - Eure",
    },
    {
      id: 29,
      text: "28 - Eure-et-Loir",
    },
    {
      id: 30,
      text: "29 - Finistère",
    },
    {
      id: 31,
      text: "30 - Gard",
    },
    {
      id: 32,
      text: "31 - Haute-Garonne",
    },
    {
      id: 33,
      text: "32 - Gers",
    },
    {
      id: 34,
      text: "33 - Gironde",
    },
    {
      id: 35,
      text: "34 - Hérault",
    },
    {
      id: 36,
      text: "35 - Ille-et-Vilaine",
    },
    {
      id: 37,
      text: "36 - Indre",
    },
    {
      id: 38,
      text: "37 - Indre-et-Loire",
    },
    {
      id: 39,
      text: "38 - Isère",
    },
    {
      id: 40,
      text: "39 - Jura",
    },
    {
      id: 41,
      text: "40 - Landes",
    },
    {
      id: 42,
      text: "41 - Loir-et-Cher",
    },
    {
      id: 43,
      text: "42 - Loire",
    },
    {
      id: 44,
      text: "43 - Haute-Loire",
    },
    {
      id: 45,
      text: "44 - Loire-Atlantique",
    },
    {
      id: 46,
      text: "45 - Loiret",
    },
    {
      id: 47,
      text: "46 - Lot",
    },
    {
      id: 48,
      text: "47 - Lot-et-Garonne",
    },
    {
      id: 49,
      text: "48 - Lozère",
    },
    {
      id: 50,
      text: "49 - Maine-et-Loire",
    },
    {
      id: 51,
      text: "50 - Manche",
    },
    {
      id: 52,
      text: "51 - Marne",
    },
    {
      id: 53,
      text: "52 - Haute-Marne",
    },
    {
      id: 54,
      text: "53 - Mayenne",
    },
    {
      id: 55,
      text: "54 - Meurthe-et-Moselle",
    },
    {
      id: 56,
      text: "55 - Meuse",
    },
    {
      id: 57,
      text: "56 - Morbihan",
    },
    {
      id: 58,
      text: "57 - Moselle",
    },
    {
      id: 59,
      text: "58 - Nièvre",
    },
    {
      id: 60,
      text: "59 - Nord",
    },
    {
      id: 61,
      text: "60 - Oise",
    },
    {
      id: 62,
      text: "61 - Orne",
    },
    {
      id: 63,
      text: "62 - Pas-de-Calais",
    },
    {
      id: 64,
      text: "63 - Puy-de-Dôme",
    },
    {
      id: 65,
      text: "64 - Pyrénées-Atlantiques",
    },
    {
      id: 66,
      text: "65 - Hautes-Pyrénées",
    },
    {
      id: 67,
      text: "66 - Pyrénées-Orientales",
    },
    {
      id: 68,
      text: "67 - Bas-Rhin",
    },
    {
      id: 69,
      text: "68 - Haut-Rhin",
    },
    {
      id: 70,
      text: "69 - Rhône",
    },
    {
      id: 71,
      text: "70 - Haute-Saône",
    },
    {
      id: 72,
      text: "71 - Saône-et-Loire",
    },
    {
      id: 73,
      text: "72 - Sarthe",
    },
    {
      id: 74,
      text: "73 - Savoie",
    },
    {
      id: 75,
      text: "74 - Haute-Savoie",
    },
    {
      id: 76,
      text: "75 - Paris",
    },
    {
      id: 77,
      text: "76 - Seine-Maritime",
    },
    {
      id: 78,
      text: "77 - Seine-et-Marne",
    },
    {
      id: 79,
      text: "78 - Yvelines",
    },
    {
      id: 80,
      text: "79 - Deux-Sèvres",
    },
    {
      id: 81,
      text: "80 - Somme",
    },
    {
      id: 82,
      text: "81 - Tarn",
    },
    {
      id: 83,
      text: "82 - Tarn-et-Garonne",
    },
    {
      id: 84,
      text: "83 - Var",
    },
    {
      id: 85,
      text: "84 - Vaucluse",
    },
    {
      id: 86,
      text: "85 - Vendée",
    },
    {
      id: 87,
      text: "86 - Vienne",
    },
    {
      id: 88,
      text: "87 - Haute-Vienne",
    },
    {
      id: 89,
      text: "88 - Vosges",
    },
    {
      id: 90,
      text: "89 - Yonne",
    },
    {
      id: 91,
      text: "90 - Territoire de Belfort",
    },
    {
      id: 92,
      text: "91 - Essonne",
    },
    {
      id: 93,
      text: "92 - Hauts-de-Seine",
    },
    {
      id: 94,
      text: "93 - Seine-Saint-Denis",
    },
    {
      id: 95,
      text: "94 - Val-de-Marne",
    },
    {
      id: 96,
      text: "95 - Val-d'Oise",
    },
    {
      id: 97,
      text: "971 - Guadeloupe",
    },
    {
      id: 98,
      text: "972 - Martinique",
    },
    {
      id: 99,
      text: "973 - Guyane",
    },
    {
      id: 100,
      text: "974 - La Réunion",
    },
    {
      id: 101,
      text: "976 - Mayotte",
    },
  ];

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

        <button type="submit" onClick={nextStep}>
          Continuer
        </button>
      </form>
    </div>
  );
}

export default EnterpriseStepOne;
