const Joi = require("joi");

const validateCandidate = async (req, res, next) => {
  const candidateSchema = Joi.object({
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

    // password: Joi.string().pattern(/^(?=.*[*#])[a-zA-Z0-9À-ÖØ-öø-ÿ*#]{8,15}$/),
    password: Joi.string(),
    passwordCheck: Joi.ref("password"),

    biography: Joi.string().allow(""),
    departmentId: Joi.number().required(),
    contractTypesId: Joi.number().required(),
    workRhythmsId: Joi.number().required(),
    appetencesId: Joi.number().required(),
    levelId: Joi.number().required(),
    languages: Joi.array().required(),
  });

  const { error, value } = candidateSchema.validate(req.body);

  if (error) {
    console.error(error);
    res.sendStatus(401);
  } else {
    console.info("Validation succeeded:", value);
    next();
  }
};

module.exports = { validateCandidate };
