/* ************************************************************************* */
// Register Data Managers for Tables
/* ************************************************************************* */

// Import the manager modules responsible for handling data operations on the tables
const EnterpriseManager = require("./models/EnterpriseManager");
const CandidateManager = require("./models/CandidateManager");
const ProgrammingLanguagesManager = require("./models/ProgrammingLanguagesManager");
const SoftSkillsManager = require("./models/SoftSkillsManager");
const ContractTypesManager = require("./models/ContractTypesManager");
const WorkRhythmsManager = require("./models/WorkRhythmsManager");
const AppetencesManager = require("./models/AppetencesManager");
const CandidateLikeManager = require("./models/CandidateLikeManager");
const EnterpriseLikeManager = require("./models/EnterpriseLikeManager");
const ResumeHasProgrammingLanguagesManager = require("./models/ResumeHasProgrammingLanguagesManager");
const JobOfferHasProgrammingLanguagesManager = require("./models/JobOfferHasProgrammingLanguagesManager");
const ExperienceManager = require("./models/ExperienceManager");
const JobOfferManager = require("./models/JobOfferManager");
const ResumeManager = require("./models/ResumeManager");
const MissionManager = require("./models/MissionManager");
const DepartmentsManager = require("./models/DepartmentsManager");
const LevelsManager = require("./models/LevelsManager");
const BusinessSectorsManager = require("./models/BusinessSectors");
const LegalStatusManager = require("./models/LegalStatus");
const ResumeHasSoftSkillsManager = require("./models/ResumeHasSoftSkillsManager");
const CandidateMatchManager = require("./models/CandidateMatchManager");
const EnterpriseMatchManager = require("./models/EnterpriseMatchManager");

const managers = [
  EnterpriseManager,
  CandidateManager,
  ProgrammingLanguagesManager,
  SoftSkillsManager,
  ContractTypesManager,
  WorkRhythmsManager,
  AppetencesManager,
  CandidateLikeManager,
  EnterpriseLikeManager,
  ResumeHasProgrammingLanguagesManager,
  JobOfferHasProgrammingLanguagesManager,
  ExperienceManager,
  JobOfferManager,
  ResumeManager,
  MissionManager,
  DepartmentsManager,
  LevelsManager,
  BusinessSectorsManager,
  LegalStatusManager,
  ResumeHasSoftSkillsManager,
  CandidateMatchManager,
  EnterpriseMatchManager,
  // Add other managers here
];

// Create an empty object to hold data managers for different tables
const tables = {};

// Register each manager as data access point for its table
managers.forEach((ManagerClass) => {
  const manager = new ManagerClass();

  tables[manager.table] = manager;
});

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
