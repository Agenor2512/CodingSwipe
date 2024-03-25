const Joi = require("joi");

const validateEnterprise = async (req, res, next) => {
  const enterpriseSchema = Joi.object({
    name: Joi.string()
      .pattern(/^[a-zA-Z0-9À-ÖØ-öø-ÿ\s]+$/)
      .min(3)
      .max(50)
      .messages({
        "string.min": "Votre nom doit au moins contenir 3 caractères.",
        "string.max": "Votre nom doit faire au maximum 50 caractères.",
        "string.empty": "Veuillez remplir le champ : Nom de l'entreprise.",
      })
      .required(),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } })
      .pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/)
      .required(),

    password: Joi.string().pattern(/^(?=.*[*#])[a-zA-Z0-9À-ÖØ-öø-ÿ*#]{8,15}$/),
    passwordCheck: Joi.ref("password"),

    siret: Joi.string().length(14).required(),
    description: Joi.string().required(),
    departmentId: Joi.number().required(),
    legalStatusId: Joi.number().required(),
    businessSectorsId: Joi.number().required(),
    salary: Joi.number().required(),
    contractTypesId: Joi.number().required(),
    workRhythmsId: Joi.number().required(),
    appetencesId: Joi.number().required(),
    languages: Joi.array().required(),
  });

  const { error } = enterpriseSchema.validate(req.body);

  if (error) {
    console.error(error);
    res.sendStatus(401);
  } else {
    console.info("Validation succeded");
    next();
  }
};

module.exports = { validateEnterprise };
