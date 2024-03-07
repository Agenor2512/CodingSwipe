<<<<<<< HEAD
CREATE TABLE enterprise (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  name VARCHAR(100) NOT NULL,
  siret INT NOT NULL,
  legal_status VARCHAR(100) NOT NULL,
  business_sector VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  email VARCHAR(320) NOT NULL,
  password VARCHAR(100) NOT NULL
);

INSERT INTO enterprise (name, siret, legal_status, business_sector, description, email, password)
VALUES
('Carrefour', 123456, 'SAS', 'grande-distribution', 'Acteur mondial de la grande distribution', "lisa@carrefour.com", "monmdpsecret"),
('Lidl', 214654,'SAS', 'grande-distribution', 'Acteur mondial de la grande distribution', "yop@lidl.com", "lidlemotdepasse"),
('Google', 657392,'SAS', 'Informatique', 'Vous connaissez pas Google??', "louis@google.com", "googlechutchut");
=======
create table departments (
  id int not null auto_increment,
  department varchar(100) not null,
  primary key(id)
);

create table legal_status (
  id int not null auto_increment,
  legal_status varchar(100) not null,
  primary key(id)
);

create table business_sectors (
  id int not null auto_increment,
  business_sector varchar(100) not null,
  primary key(id)
);

create table enterprise (
  id varchar(36) not null,
  name varchar(100) not null,
  siret int not null,
  legal_status varchar(100) not null,
  business_sector varchar(100) not null,
  email varchar(320) not null,
  password varchar(100) not null,
  department_id int not null,
  legal_status_id int not null,
  business_sectors_id int not null,
  primary key(id),
  foreign key(department_id) references departments(id),
  foreign key(legal_status_id) references legal_status(id),
  foreign key(business_sectors_id) references business_sectors(id)
);

create table candidate (
  id varchar(36) not null,
  firstname varchar(100) not null,
  lastname varchar(100) not null,
  email varchar(320) not null, 
  password varchar(100) not null,
  department_id int not null,
  primary key(id),
  foreign key(department_id) references departments(id)
);

create table soft_skills (
  id int not null auto_increment,
  soft_skill varchar(100),
  primary key(id)
);

create table programming_languages (
  id int not null auto_increment,
  programming_language varchar(100),
  primary key(id)
);

create table contract_types (
  id int not null auto_increment,
  contract_type varchar(100),
  primary key(id)
);

create table work_rhythms (
  id int not null auto_increment,
  work_rhythm varchar(100),
  primary key(id)
);

create table resume ( 
  id varchar(36) not null,
  soft_skills varchar(100),
  programming_languages varchar(100) not null,
  contract_types varchar(100) not null,
  work_rhythms varchar(100) not null, 
  experiences text,
  biography text, 
  candidate_id varchar(100) not null,
  primary key(id),
  foreign key(candidate_id) references candidate(id)
);

create table resume_has_soft_skills (
  id int not null auto_increment,
  resume_id varchar(36) not null,
  soft_skills_id int not null,
  primary key(id),
  foreign key(resume_id) references resume(id),
  foreign key(soft_skills_id) references soft_skills(id)
);

create table resume_has_programming_languages (
  id int not null auto_increment,
  resume_id varchar(36) not null,
  programming_languages_id int not null,
  primary key(id),
  foreign key(resume_id) references resume(id),
  foreign key(programming_languages_id) references programming_languages(id)
);

create table resume_has_contract_type_looked_for (
  id int not null auto_increment,
  resume_id varchar(36) not null,
  contract_types_id int not null,
  primary key(id),
  foreign key(resume_id) references resume(id),
  foreign key(contract_types_id) references contract_types(id)
);

create table resume_has_work_rhythm_looked_for (
  id int not null auto_increment,
  resume_id varchar(36) not null,
  work_rhythms_id int not null,
  primary key(id),
  foreign key(resume_id) references resume(id),
  foreign key(work_rhythms_id) references work_rhythms(id)
);

create table experiences (
  id int not null auto_increment,
  resume_id varchar(36) not null,
  primary key(id),
  foreign key(resume_id) references resume(id)
);

create table job_offer (
  id varchar(36) not null,
  programming_languages varchar(100) not null,
  salary varchar(100),
  contract_types_id int not null,
  works_rhythms_id int not null,
  enterprise_id varchar(36) not null,
  primary key(id),
  foreign key(contract_types_id) references contract_types(id),
  foreign key(works_rhythms_id) references work_rhythms(id),
  foreign key(enterprise_id) references enterprise(id)
);

create table job_offer_has_programming_languages (
  id varchar(36) not null,
  job_offer_id varchar(36) not null,
  programming_languages_id int not null,
  primary key(id),
  foreign key(job_offer_id) references job_offer(id),
  foreign key(programming_languages_id) references programming_languages(id)
);

create table main_missions (
  id int not null auto_increment, 
  mission text,
  job_offer_id varchar(36) not null,
  primary key(id),
  foreign key(job_offer_id) references job_offer(id)
);

insert into departments (department) values
("01 - Ain"),
("02 - Aisne"),
("03 - Allier"),
("04 - Alpes-de-Haute-Provence"),
("05 - Hautes-Alpes"),
("06 - Alpes-Maritimes"),
("07 - Ardèche"),
("08 - Ardennes"),
("09 - Ariège"),
("10 - Aube"),
("11 - Aude"),
("12 - Aveyron"),
("13 - Bouches-du-Rhône"),
("14 - Calvados"),
("15 - Cantal"),
("16 - Charente"),
("17 - Charente-Maritime"),
("18 - Cher"),
("19 - Corrèze"),
("21 - Côte-d'Or"),
("22 - Côtes-d'Armor"),
("23 - Creuse"),
("24 - Dordogne"),
("25 - Doubs"),
("26 - Drôme"),
("27 - Eure"),
("28 - Eure-et-Loir"),
("29 - Finistère"),
("30 - Gard"),
("31 - Haute-Garonne"),
("32 - Gers"),
("33 - Gironde"),
("34 - Hérault"),
("35 - Ille-et-Vilaine"),
("36 - Indre"),
("37 - Indre-et-Loire"),
("38 - Isère"),
("39 - Jura"),
("40 - Landes"),
("41 - Loir-et-Cher"),
("42 - Loire"),
("43 - Haute-Loire"),
("44 - Loire-Atlantique"),
("45 - Loiret"),
("46 - Lot"),
("47 - Lot-et-Garonne"),
("48 - Lozère"),
("49 - Maine-et-Loire"),
("50 - Manche"),
("51 - Marne"),
("52 - Haute-Marne"),
("53 - Mayenne"),
("54 - Meurthe-et-Moselle"),
("55 - Meuse"),
("56 - Morbihan"),
("57 - Moselle"),
("58 - Nièvre"),
("59 - Nord"),
("60 - Oise"),
("61 - Orne"),
("62 - Pas-de-Calais"),
("63 - Puy-de-Dôme"),
("64 - Pyrénées-Atlantiques"),
("65 - Hautes-Pyrénées"),
("66 - Pyrénées-Orientales"),
("67 - Bas-Rhin"),
("68 - Haut-Rhin"),
("69 - Rhône"),
("70 - Haute-Saône"),
("71 - Saône-et-Loire"),
("72 - Sarthe"),
("73 - Savoie"),
("74 - Haute-Savoie"),
("75 - Paris"),
("76 - Seine-Maritime"),
("77 - Seine-et-Marne"),
("78 - Yvelines"),
("79 - Deux-Sèvres"),
("80 - Somme"),
("81 - Tarn"),
("82 - Tarn-et-Garonne"),
("83 - Var"),
("84 - Vaucluse"),
("85 - Vendée"),
("86 - Vienne"),
("87 - Haute-Vienne"),
("88 - Vosges"),
("89 - Yonne"),
("90 - Territoire de Belfort"),
("91 - Essonne"),
("92 - Hauts-de-Seine"),
("93 - Seine-Saint-Denis"),
("94 - Val-de-Marne"),
("95 - Val-d'Oise"),
("971 - Guadeloupe"),
("972 - Martinique"),
("973 - Guyane"),
("974 - La Réunion"),
("976 - Mayotte");

insert into legal_status (legal_status) values
('EI - Entrepreneur individuel'),
('EURL - Entreprise unipersonnelle à responsabilité limitée'),
('SARL - Société à responsabilité limitée'),
('SASU - Société par actions simplifiée unipersonnelle'),
('SAS - Société par actions simplifiée'),
('SA - Société anonyme'),
('SNC - Société en nom collectif'),
('SCS - Société en commandite simple'),
('SCA - Société en commandite par actions');

insert into business_sectors (business_sector) values
('Services financiers'),
('Santé et sciences de la vie'),
('Énergie'),
('Industrie manufacturière'),
('Commerce de détail et de gros'),
('Alimentation et boissons'),
('Transport et logistique'),
('Immobilier'),
('Éducation'),
('Divertissement et médias'),
('Services professionnels'),
('Tourisme et hôtellerie'),
('Industrie extractive'),
('Télécommunications'),
('Environnement et durabilité'),
('Sport et loisirs'),
('Mode et habillement'),
('Biens de consommation'),
('Services gouvernementaux et publics'),
('Technologie de l''information et des communications (TIC)');

insert into soft_skills (soft_skill) values 
("Communication"),
("Résolution de problème"),
("Pensée critique"),
("Travail d'équipe"),
("Adaptabilité"),
("Gestion du temps"),
("Créativité"),
("Empathie"),
("Gestion du stresse"),
("Curiosité"),
("Autonomie"),
("Leadership"),
("Capacité d'écoute"),
("Persévérance");

insert into programming_languages (programming_language) values 
("HTML / CSS"),
("JavaScript"),
("Python"),
("Java"),
("Ruby On Rails"),
("Vue.js"),
("Swift"),
("Kotlin"),
("Flutter"),
("Go"),
("C#"),
("C++"),
("React"),
("Angular"),
("Node.js"),
("PHP"),
("Rust"),
(".NET Core / .NET 5"),
("SQL"),
("NoSQL");

insert into contract_types (contract_type) values 
("Un CDI"),
("Un CDD"),
("Un Stage / Une alternance"),
("Du freelance");

insert into work_rhythms (work_rhythm) values 
("Sur site"),
("Remote partiel"),
("Full remote");
>>>>>>> dev
