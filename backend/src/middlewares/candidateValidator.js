const Joi = require("joi");

const validateCandidate = () => {
  const candidateSchema = Joi.object({
    id: Joi.string()
      .guid({ version: "uuidv4" })
      .messages({
        "string.guid": "Erreur lors de l'ajout de l'id",
      })
      .required(),

    firstname: Joi.string()
      .pattern(/^[a-zA-Z0-9À-ÖØ-öø-ÿ-?\s]+$/)
      .min(3)
      .max(30)
      .messages({
        "string.min": "Votre prénom doit au moins contenir 3 caractères.",
        "string.max": "Votre prénom doit faire au maximum 30 caractères.",
        "string.empty": "Veuillez remplir le champ : Prénom.",
      })
      .required(),

    lastname: Joi.string()
      .pattern(/^[a-zA-Z0-9À-ÖØ-öø-ÿ-?\s]+$/)
      .min(3)
      .max(30)
      .messages({
        "string.min":
          "Votre nom de famille doit au moins contenir 3 caractères.",
        "string.max":
          "Votre nom de famille doit faire au maximum 50 caractères.",
        "string.empty": "Veuillez remplir le champ : Nom.",
      })
      .required(),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } })
      .pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/)
      .required(),

    password: Joi.string().pattern(/^(?=.*[*#])[a-zA-Z0-9À-ÖØ-öø-ÿ*#]{8,15}$/),
    repeat_password: Joi.ref("password"),
  });

  const candidateData = {
    id: "2de1feec-a19a-4f16-9226-af782acdab42",
    firstname: "Jean-Michel",
    lastname: "A peu près",
    email: "javacorp@gmail.com",
    password: "codîngsw*ipe25*",
    repeat_password: "codîngsw*ipe25*",
  };

  const { error, value } = candidateSchema.validate(candidateData);

  if (error) {
    console.error("Validation failed:", error.message);
  } else {
    console.info("Validation succeeded:", value);
  }
};

validateCandidate();

module.exports = { validateCandidate };
