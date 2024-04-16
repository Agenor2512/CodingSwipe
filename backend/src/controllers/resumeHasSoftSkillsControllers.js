const tables = require("../tables");

const add = async (req, res, next) => {
  try {
    const { softSkills } = req.body;
    console.info(softSkills);

    await Promise.all(
      softSkills.map((softSkill) =>
        tables.resume_has_soft_skills.create(
          "2de1feec-a19a-4f16-9226-af752acdab46",
          softSkill
        )
      )
    );

    res.status(201).json({
      msg: "Soft Skills ajoutés avec succès",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { add };
