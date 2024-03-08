/* eslint-disable react/prop-types */
import "../../styles/register/registerStepOne.css";

function CandidateStepOne({ formTools: { nextStep, handleFormSubmit } }) {
  const departements = [
    {
      key: "01",
      text: "01 - Ain",
    },
    {
      key: "02",
      text: "02 - Aisne",
    },
    {
      key: "03",
      text: "03 - Allier",
    },
    {
      key: "04",
      text: "04 - Alpes-de-Haute-Provence",
    },
    {
      key: "05",
      text: "05 - Hautes-Alpes",
    },
    {
      name: "06",
      text: "06 - Alpes-Maritimes",
    },
    {
      key: "07",
      text: "07 - Ardèche",
    },
    {
      key: "08",
      text: "08 - Ardennes",
    },
    {
      key: "09",
      text: "09 - Ariège",
    },
    {
      key: "10",
      text: "10 - Aube",
    },
    {
      key: "11",
      text: "11 - Aude",
    },
    {
      key: "12",
      text: "12 - Aveyron",
    },
    {
      key: "13",
      text: "13 - Bouches-du-Rhône",
    },
    {
      key: "14",
      text: "14 - Calvados",
    },
    {
      key: "15",
      text: "15 - Cantal",
    },
    {
      key: "16",
      text: "16 - Charente",
    },
    {
      key: "17",
      text: "17 - Charente-Maritime",
    },
    {
      key: "18",
      text: "18 - Cher",
    },
    {
      key: "19",
      text: "19 - Corrèze",
    },
    {
      key: "2A",
      text: "2A - Corse-du-Sud",
    },
    {
      key: "2B",
      text: "2B - Haute-Corse",
    },
    {
      key: "21",
      text: "21 - Côte-d&apos;Or",
    },
    {
      key: "22",
      text: "22 - Côtes-d&apos;Armor",
    },
    {
      key: "23",
      text: "23 - Côte-d&apos;Or",
    },
    {
      key: "24",
      text: "24 - Dordogne",
    },
    {
      key: "25",
      text: "25 - Doubs",
    },
    {
      key: "26",
      text: "26 - Drôme",
    },
    {
      key: "27",
      text: "27 - Eure",
    },
    {
      key: "28",
      text: "28 - Eure-et-Loir",
    },
    {
      key: "29",
      text: "29 - Finistère",
    },
    {
      key: "30",
      text: "30 - Gard",
    },
    {
      key: "31",
      text: "31 -  Haute-Garonne",
    },
    {
      key: "32",
      text: "32 - Gers",
    },
    {
      key: "33",
      text: "33 - Gironde",
    },
    {
      key: "34",
      text: "34 - Hérault",
    },
    {
      key: "35",
      text: "35 - Ille-et-Vilaine",
    },
    {
      key: "36",
      text: "36 - Indre",
    },
    {
      key: "37",
      text: "37 -  Indre-et-Loire",
    },
    {
      key: "38",
      text: "38 - Isère",
    },
    {
      key: "39",
      text: "39 - Jura",
    },
    {
      key: "40",
      text: "40 - Landes",
    },
    {
      key: "41",
      text: "41 - Loir-et-Cher",
    },
    {
      key: "42",
      text: "42 - Loire",
    },
    {
      key: "43",
      text: "43 - Haute-Loire",
    },
    {
      key: "44",
      text: "44 - Loire-Atlantique",
    },
    {
      key: "45",
      text: "45 - Loiret",
    },
    {
      key: "46",
      text: "46 - Lot",
    },
    {
      key: "47",
      text: "47 - Lot-et-Garonne",
    },
    {
      key: "48",
      text: "48 - Lozère",
    },
    {
      key: "49",
      text: "49 - Maine-et-Loire",
    },
    {
      key: "50",
      text: "50 - Manche",
    },
    {
      key: "51",
      text: "51 - Marne",
    },
    {
      key: "52",
      text: "52 - Haute-Marne",
    },
    {
      key: "53",
      text: "53 - Mayenne",
    },
    {
      key: "54",
      text: "54 - Meurthe-et-Moselle",
    },
    {
      key: "55",
      text: "55 - Meuse",
    },
    {
      key: "56",
      text: "56 - Morbihan",
    },
    {
      key: "57",
      text: "57 - Moselle",
    },
    {
      key: "58",
      text: "58 - Nièvre",
    },
    {
      key: "59",
      text: "59 - Nord",
    },
    {
      key: "60",
      text: "60 - Oise",
    },
    {
      key: "61",
      text: "61 - Orne",
    },
    {
      key: "62",
      text: "62 - Pas-de-Calais",
    },
    {
      key: "63",
      text: "63 - Puy-de-Dôme",
    },
    {
      key: "64",
      text: "64 - Pyrénées-Atlantiques",
    },
    {
      key: "65",
      text: "65 - Hautes-Pyrénées",
    },
    {
      key: "66",
      text: "66 - Pyrénées-Orientales",
    },
    {
      key: "67",
      text: "67 - Bas-Rhin",
    },
    {
      key: "68",
      text: "68 - Haut-Rhin",
    },
    {
      key: "69",
      text: "69 - Rhône",
    },
    {
      key: "70",
      text: "70 - Haute-Saône",
    },
    {
      key: "71",
      text: "71 - Saône-et-Loire,",
    },
    {
      key: "72",
      text: "72 - Sarthe",
    },
    {
      key: "73",
      text: "73 - Savoie",
    },
    {
      key: "74",
      text: "74 - Haute-Savoie",
    },
    {
      key: "75",
      text: "75 - Paris",
    },
    {
      key: "76",
      text: "76 - Seine-Maritime",
    },
    {
      key: "77",
      text: "77 - Seine-et-Marne",
    },
    {
      key: "78",
      text: "78 - Yvelines",
    },
    {
      key: "79",
      text: "79 - Deux-Sèvres",
    },
    {
      key: "80",
      text: "80 - Somme",
    },
    {
      key: "81",
      text: "81 - Tarn",
    },
    {
      key: "82",
      text: "82 - Tarn-et-Garonne",
    },
    {
      key: "83",
      text: "83 - Var",
    },
    {
      key: "84",
      text: "84 - Vaucluse",
    },
    {
      key: "85",
      text: "85 - Vendée",
    },
    {
      key: "86",
      text: "86 - Vienne",
    },
    {
      key: "87",
      text: "87 - Haute-Vienne",
    },
    {
      key: "88",
      text: "88 - Vosges",
    },
    {
      key: "89",
      text: "89 - Yonne",
    },
    {
      key: "90",
      text: "90 - Territoire de Belfort",
    },
    {
      key: "91",
      text: "91 - Essonne",
    },
    {
      key: "92",
      text: "92 - Hauts-de-Seine",
    },
    {
      key: "93",
      text: "93 - Seine-Saint-Denis",
    },
    {
      key: "94",
      text: "94 - Val-de-Marne",
    },
    {
      key: "95",
      text: "95 - Val-d'Oise",
    },
    {
      key: "971",
      text: "971 - Guadeloupe",
    },
    {
      key: "972",
      text: "972 - Martinique",
    },
    {
      key: "973",
      text: "973 - Guyane",
    },
    {
      key: "974",
      text: "974 - La Réunion",
    },
    {
      key: "976",
      text: "976 - Mayotte",
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
            <label htmlFor="candidate-firstame">Nom</label>
            <input
              type="text"
              minLength={3}
              name="candidate-firstame"
              id="candidate-firstame"
              placeholder="Doe"
              required
            />
          </div>

          <div className="register_label_input_container">
            <label htmlFor="candidate-lastname">Prénom</label>
            <input
              type="text"
              minLength={3}
              name="candidate-lastname"
              id="candidate-lastname"
              placeholder="John"
              required
            />
          </div>
        </div>

        <div className="step_one_register_container">
          <div className="register_label_input_container">
            <label htmlFor="email-candidate">Email</label>
            <input
              type="email"
              name="email-candidate"
              id="email-candidate"
              placeholder="exemple@gmail.com"
              required
            />
          </div>
          <div className="register_label_input_container">
            <label htmlFor="department">Département</label>
            <select id="department" required>
              <option value="">Veuillez choisir votre département</option>
              {departements.map(({ key, text }) => (
                <option key={key} value={text}>
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
            />
          </div>
          <div className="register_label_input_container">
            <label htmlFor="password-check">Vérification du mot de passe</label>
            <input
              type="password"
              minLength={8}
              name="password-check"
              id="password-check"
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

export default CandidateStepOne;
