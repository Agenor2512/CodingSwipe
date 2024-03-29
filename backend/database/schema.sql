-- SQLBook: Code
create table departments (
  id int not null auto_increment,
  department varchar(100) not null,
  primary key(id)
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

create table levels(
  id int not null auto_increment,
  level varchar(100) not null,
  primary key(id)
);

insert into levels (level) values
("Junior"),
("Mid-level"),
("Senior");

create table appetences (
  id int not null auto_increment,
  appetence varchar(100) not null,
  primary key(id)
);

insert into appetences (appetence) values 
("Frontend"),
("Backend"),
("Full stack");

create table soft_skills (
  id int not null auto_increment,
  soft_skill varchar(100),
  primary key(id)
);

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

create table programming_languages (
  id int not null auto_increment,
  programming_language varchar(100),
  primary key(id)
);

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

create table contract_types (
  id int not null auto_increment,
  contract_type varchar(100),
  primary key(id)
);

insert into contract_types (contract_type) values 
("Un CDI"),
("Un CDD"),
("Un Stage / Une alternance"),
("Du freelance");

create table work_rhythms (
  id int not null auto_increment,
  work_rhythm varchar(100),
  primary key(id)
);

insert into work_rhythms (work_rhythm) values 
("Sur site"),
("Remote partiel"),
("Full remote");

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

create table resume ( 
  id varchar(36) not null,
  biography text, 
  appetences_id int not null,
  candidate_id varchar(36) not null,
  contract_types_id int not null,
  work_rhythms_id int not null,
  level_id int not null,
  primary key(id),
  foreign key(appetences_id) references appetences(id),
  foreign key(candidate_id) references candidate(id),
  foreign key(contract_types_id) references contract_types(id),
  foreign key(work_rhythms_id) references work_rhythms(id),
  foreign key(level_id) references levels(id)
);

create table resume_has_programming_languages (
  resume_id varchar(36) not null,
  programming_languages_id int not null,
  primary key(resume_id, programming_languages_id),
  foreign key(resume_id) references resume(id),
  foreign key(programming_languages_id) references programming_languages(id)
);

create table business_sectors (
  id int not null auto_increment,
  business_sector varchar(100) not null,
  primary key(id)
);

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

create table legal_status (
  id int not null auto_increment,
  legal_status varchar(100) not null,
  primary key(id)
);

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

create table enterprise (
  id varchar(36) not null,
  name varchar(100) not null,
  siret bigint not null,
  description text not null,
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

create table job_offer (
  id varchar(36) not null,
  salary varchar(100),
  contract_types_id int not null,
  work_rhythms_id int not null,
  appetences_id int not null,
  enterprise_id varchar(36) not null,
  primary key(id),
  foreign key(contract_types_id) references contract_types(id),
  foreign key(work_rhythms_id) references work_rhythms(id),
  foreign key(appetences_id) references appetences(id),
  foreign key(enterprise_id) references enterprise(id)
);

create table job_offer_has_programming_languages (
  job_offer_id varchar(36) not null,
  programming_languages_id int not null,
  primary key(job_offer_id, programming_languages_id),
  foreign key(job_offer_id) references job_offer(id),
  foreign key(programming_languages_id) references programming_languages(id)
);


create table enterprise_like (
  id int not null auto_increment primary key,
  enterprise_id varchar(36) not null,
  candidate_id varchar(36) not null,
  foreign key (enterprise_id) references enterprise(id),
  foreign key (candidate_id) references candidate(id)
);

create table candidate_like (
  id int not null auto_increment primary key,
  candidate_id varchar(36) not null,
  enterprise_id varchar(36) not null,
  foreign key (candidate_id) references candidate(id),
  foreign key (enterprise_id) references enterprise(id)
);
-- CREATION CANDIDATS

-- create table resume_has_soft_skills (
--   id int not null auto_increment,
--   resume_id varchar(36) not null,
--   soft_skills_id int not null,
--   primary key(id),
--   foreign key(resume_id) references resume(id),
--   foreign key(soft_skills_id) references soft_skills(id)
-- );

-- CREATION ENTREPRISES

-- create table profilLike (
 --  id int not null auto_increment,
 --  enterprise_id varchar(36) not null,
--   candidate_id varchar(36) not null,
--   foreign key(enterprise_id) references enterprise(id),
--   foreign key(candidate_id) references enterprise(id)
-- );

-- CREATION CANDIDATS

insert into candidate (id, firstname, lastname, email, password, department_id) values 
("2de1feec-a19a-4f16-9226-af782acdab42", "Bernard", "Martin", "candidate@gmail.com", "$argon2id$v=19$m=19456,t=2,p=1$ZH23KqlzAUfjnnUDS2Nw/w$y3OTxkwuiuOu8uRUFRpCltURCrvcBR8vxJR31S0ZdvQ", 32),
("2de1feec-a19a-4f16-9226-af752acdab43", "Pauline", "Mbappé", "paulinembappe@hotmail.com", "$argon2id$v=19$m=19456,t=2,p=1$ZH23KqlzAUfjnnUDS2Nw/w$y3OTxkwuiuOu8uRUFRpCltURCrvcBR8vxJR31S0ZdvQ", 13),
("2de1feec-a12a-4f16-9226-af752acdab44", "Yves", "Rocher", "yvesrocher@wanadoo.fr", "$argon2id$v=19$m=19456,t=2,p=1$ZH23KqlzAUfjnnUDS2Nw/w$y3OTxkwuiuOu8uRUFRpCltURCrvcBR8vxJR31S0ZdvQ", 45),
("2de2feec-a12a-4f16-9226-af752acdab45", "Sarah", "Croche", "sarah_croche@gmail.com", "$argon2id$v=19$m=19456,t=2,p=1$ZH23KqlzAUfjnnUDS2Nw/w$y3OTxkwuiuOu8uRUFRpCltURCrvcBR8vxJR31S0ZdvQ", 4),
("2de1feec-a12a-4f26-9226-af752acdab46", "Guy", "Tare", "guy_tare@hotmail.com", "$argon2id$v=19$m=19456,t=2,p=1$ZH23KqlzAUfjnnUDS2Nw/w$y3OTxkwuiuOu8uRUFRpCltURCrvcBR8vxJR31S0ZdvQ", 75);

insert into resume (id, biography, appetences_id, candidate_id, contract_types_id, work_rhythms_id, level_id) values
("2de1feec-a19a-4f16-9226-af782acdab47", "Coucou je suis Bernard Martin, j'aime regarder les coucher de soleil et les longues balades sur la plage", 1, "2de1feec-a19a-4f16-9226-af782acdab42", 1, 1, 2),
("2de1feec-a19a-4f16-9226-af752acdab46", "He coucou je ne suis pas de la famille à Kiki", 3,"2de1feec-a19a-4f16-9226-af752acdab43", 2, 2, 3),
("2de1feec-a12a-4f16-9226-af752acdab45", "La vie par les plantes et un peu de code", 2,"2de1feec-a12a-4f16-9226-af752acdab44", 1, 3, 1),
("2de2feec-a12a-4f16-9226-af752acdab43", "Hallo hallo Ozon 2001", 3, "2de2feec-a12a-4f16-9226-af752acdab45", 3, 2, 1),
("2de1feec-a12a-4f26-9226-af752acdab44", "Merci pour les chaussures", 1, "2de1feec-a12a-4f26-9226-af752acdab46", 2, 1, 2);

insert into resume_has_programming_languages (resume_id, programming_languages_id) values 
("2de1feec-a19a-4f16-9226-af782acdab47", 5), ("2de1feec-a19a-4f16-9226-af782acdab47", 7), ("2de1feec-a19a-4f16-9226-af782acdab47", 4),
("2de1feec-a19a-4f16-9226-af752acdab46", 1), ("2de1feec-a19a-4f16-9226-af752acdab46", 10), ("2de1feec-a19a-4f16-9226-af752acdab46", 17),
("2de1feec-a12a-4f16-9226-af752acdab45", 6), ("2de1feec-a12a-4f16-9226-af752acdab45", 17), ("2de1feec-a12a-4f16-9226-af752acdab45", 12),
("2de2feec-a12a-4f16-9226-af752acdab43", 9), ("2de2feec-a12a-4f16-9226-af752acdab43", 10), ("2de2feec-a12a-4f16-9226-af752acdab43", 11),
("2de1feec-a12a-4f26-9226-af752acdab44", 8), ("2de1feec-a12a-4f26-9226-af752acdab44", 6), ("2de1feec-a12a-4f26-9226-af752acdab44", 19);

-- CREATION ENTREPRISES

insert into enterprise (id, name, siret, description, email, password, department_id, legal_status_id, business_sectors_id) values 
("2de1feec-a19a-4f16-9226-af682acdab42", "Le Bon Coin", 94879165200019, "Plateforme de vente d'objets d'occasion", "entreprise@gmail.com","$argon2id$v=19$m=19456,t=2,p=1$ZH23KqlzAUfjnnUDS2Nw/w$y3OTxkwuiuOu8uRUFRpCltURCrvcBR8vxJR31S0ZdvQ", 92, 1, 5), 
("2de1feec-a19a-4f11-9226-af682acdab43", "CDiscount", 9487916210019, "Plateforme de vente d'objets neufs", "cdiscount@gmail.com","$argon2id$v=19$m=19456,t=2,p=1$ZH23KqlzAUfjnnUDS2Nw/w$y3OTxkwuiuOu8uRUFRpCltURCrvcBR8vxJR31S0ZdvQ", 40, 1, 5), 
("2de1feec-a19a-4f16-9226-af686acdab44", "Google", 9441916210019, "Moteur de recherche", "recrutement@google.fr","$argon2id$v=19$m=19456,t=2,p=1$ZH23KqlzAUfjnnUDS2Nw/w$y3OTxkwuiuOu8uRUFRpCltURCrvcBR8vxJR31S0ZdvQ", 71, 1, 5), 
("2de1feec-a19a-4f16-9226-af676acdab45", "BlaBlaCar", 9441916212219, "Plateforme de covoiturage", "recrutement@blablacar.fr","$argon2id$v=19$m=19456,t=2,p=1$ZH23KqlzAUfjnnUDS2Nw/w$y3OTxkwuiuOu8uRUFRpCltURCrvcBR8vxJR31S0ZdvQ", 12, 1, 5), 
("2df1feec-a19a-4f16-9226-af676acdab46", "Orange", 9441917212219, "Entreprise de téléphonie", "recrutement@orange.fr","$argon2id$v=19$m=19456,t=2,p=1$ZH23KqlzAUfjnnUDS2Nw/w$y3OTxkwuiuOu8uRUFRpCltURCrvcBR8vxJR31S0ZdvQ", 69, 1, 5);

INSERT INTO job_offer (id, salary, contract_types_id, work_rhythms_id, appetences_id, enterprise_id) VALUE 
("3de1feec-a19a-4f16-9226-af682acdab42", 2000, 1, 3, 2, "2de1feec-a19a-4f16-9226-af682acdab42"),
("3de1feec-a19a-4f11-9226-af682acdab43", 3000, 2, 2, 3, "2de1feec-a19a-4f11-9226-af682acdab43"),
("3de1feec-a19a-4f16-9226-af686acdab44", 1400, 3, 1, 1, "2de1feec-a19a-4f16-9226-af686acdab44"),
("3de1feec-a19a-4f16-9226-af676acdab45", 1700, 2, 2, 2, "2de1feec-a19a-4f16-9226-af676acdab45"),
("3df1feec-a19a-4f16-9226-af676acdab46", 2100, 1, 3, 2, "2df1feec-a19a-4f16-9226-af676acdab46");

insert into job_offer_has_programming_languages (job_offer_id, programming_languages_id) values 
("3de1feec-a19a-4f16-9226-af682acdab42",12),
("3de1feec-a19a-4f11-9226-af682acdab43",1),
("3de1feec-a19a-4f11-9226-af682acdab43",17),
("3de1feec-a19a-4f16-9226-af686acdab44",6),
("3de1feec-a19a-4f16-9226-af686acdab44",9),
("3de1feec-a19a-4f16-9226-af686acdab44",14),
("3de1feec-a19a-4f16-9226-af676acdab45",2),
("3de1feec-a19a-4f16-9226-af676acdab45",1),
("3de1feec-a19a-4f16-9226-af676acdab45",8),
("3df1feec-a19a-4f16-9226-af676acdab46",6),
("3df1feec-a19a-4f16-9226-af676acdab46",4);

