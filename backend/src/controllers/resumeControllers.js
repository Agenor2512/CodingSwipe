const tables = require("../tables");

const browseRandom = async (req, res, next) => {
  try {
    const candidate = await tables.candidate.readRandom();
    const resume = await tables.resume.readById(candidate[0].id);
    const languages = await tables.resume_has_programming_languages.readById(candidate[0].id);
    const experience = await tables.experiences.readById(
      candidate[0].id
    );

    res.json([
      {
        infos: resume,
        langues: languages,
        experience,
      },
    ]);
  } catch (error) {
    next(error);
  }
};

const readById = async (req, res, next) => {
  try {
    const candidate = await tables.candidate.readById(req.params.id);
    const resume = await tables.resume.readById(
      candidate.id
    );
    const languages = await tables.resume_has_programming_languages.readById(
      candidate.id
    );
    res.json({
      infos: resume,
      langues: languages,
    });
  } catch (error) {
    next(error);
  }
};

// const readRandom = async (req, res, next) => {
//   try {
//     const candidate = await tables.candidate.readRandom();
//     const resume = await tables.resume.readById(candidate[0].id);
//     const languages = await tables.resume_has_programming_languages.readById(candidate[0].id);
//     res.json([
//       {
//         infos: resume,
//         langues: languages,
//       },
//     ]);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  readById,
  // readRandom,
  browseRandom,
};
