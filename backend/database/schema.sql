-- SQLBook: Code
create table departments (
  id int not null auto_increment,
  department varchar(100) not null,
  primary key(id)
);

create table appetences (
  id int not null auto_increment,
  appetence varchar(100) not null,
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
  salary varchar(100) not null,
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

create table missions (
  id int not null auto_increment, 
  enterprise_id varchar(36) not null,
  missions text,
  primary key(id),
  foreign key(enterprise_id) references enterprise(id)
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

create table levels(
  id int not null auto_increment,
  level varchar(100) not null,
  primary key(id)
);

create table soft_skills (
  id int not null auto_increment,
  soft_skill varchar(100),
  primary key(id)
);

create table resume (
  id varchar(36) not null,
  biography TEXT DEFAULT ("Pas encore de description..."),
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

create table resume_has_soft_skills (
  resume_id varchar(36) not null,
  soft_skills_id int not null,
  primary key(resume_id, soft_skills_id),
  foreign key(resume_id) references resume(id),
  foreign key(soft_skills_id) references soft_skills(id)
);

create table experiences (
  id int not null auto_increment,
  candidate_id varchar(36) not null,
  job_title varchar(255) not null,
  company varchar(100) not null,
  experiences text not null,
  primary key(id),
  foreign key(candidate_id) references candidate(id)
);

create table enterprise_like (
  id int not null auto_increment primary key,
  enterprise_id varchar(36) not null,
  resume_id varchar(36) not null,
  foreign key (enterprise_id) references enterprise(id),
  foreign key (resume_id) references resume(id)
);

create table candidate_like (
  id int not null auto_increment primary key,
  candidate_id varchar(36) not null,
  job_offer_id varchar(36) not null,
  foreign key (candidate_id) references candidate(id),
  foreign key (job_offer_id) references job_offer(id)
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

insert into appetences (appetence) values
("Frontend"),
("Backend"),
("Full stack");

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
("Un Stage / Une Alternance"),
("Du freelance");

insert into work_rhythms (work_rhythm) values
("Sur site"),
("Remote partiel"),
("Full remote");

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

insert into enterprise (id, name, siret, description, email, password, department_id, legal_status_id, business_sectors_id) values
(
  "2de1feec-a19a-4f16-9226-af682acdab42",
  "NexToys",
  94879165200019,
  "Plateforme de vente de jouets en ligne",
  "entreprise@gmail.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  92,
  1,
  5
),
(
  "2de1feec-a19a-4f11-9226-af682acdab43",
  "TechMart",
  9487916210019,
  "Plateforme de vente de produits électroniques en ligne",
  "techmart@gmail.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  40,
  1,
  5
),
(
  "2de1feec-a19a-4f16-9226-af686acdab44",
  "InnovateNow",
  9441916210019,
  "Entreprise spécialisée dans l'innovation technologique",
  "recrutement@innovatenow.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  71,
  1,
  5
),
(
  "2de1feec-a19a-4f16-9226-af676acdab45",
  "RideShare",
  9441916212219,
  "Plateforme de covoiturage urbain",
  "recrutement@rideshare.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  12,
  1,
  5
),
(
  "2df1feec-a19a-4f16-9226-af676acdab46",
  "ConnectTel",
  9441917212219,
  "Entreprise de télécommunications et de services mobiles",
  "recrutement@connecttel.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  69,
  1,
  5
),
(
  "3de1feec-a19a-4f16-9226-af682acdab47",
  "FoodDelivery",
  9487916520031,
  "Plateforme de livraison de repas à domicile",
  "fooddelivery@gmail.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  92,
  1,
  5
),
(
  "3de1feec-a19a-4f11-9226-af682acdab48",
  "EcoTech",
  9487916210012,
  "Startup spécialisée dans les technologies écologiques",
  "ecotech@gmail.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  40,
  1,
  5
),
(
  "3de1feec-a19a-4f16-9226-af686acdab49",
  "HealthTrack",
  9441916210023,
  "Startup développant des applications de suivi de santé",
  "healthtrack@startup.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  71,
  1,
  5
),
(
  "3de1feec-a19a-4f16-9226-af676acdab50",
  "GreenRides",
  9441916212220,
  "Startup de covoiturage écologique",
  "greenrides@startup.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  12,
  1,
  5
),
(
  "3df1feec-a19a-4f16-9226-af676acdab51",
  "EduTech",
  9441917212220,
  "Startup fournissant des solutions éducatives innovantes",
  "edutech@startup.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  69,
  1,
  5
);

insert into job_offer (id, salary, contract_types_id, work_rhythms_id, appetences_id, enterprise_id) values 
(
  "3de1feec-a19a-4f16-9226-af682acdab42",
  24000,
  1,
  3,
  2,
  "2de1feec-a19a-4f16-9226-af682acdab42"
),
(
  "3de1feec-a19a-4f11-9226-af682acdab43",
  36000,
  2,
  2,
  3,
  "2de1feec-a19a-4f11-9226-af682acdab43"
),
(
  "3de1feec-a19a-4f16-9226-af686acdab44",
  16800,
  3,
  1,
  1,
  "2de1feec-a19a-4f16-9226-af686acdab44"
),
(
  "3de1feec-a19a-4f16-9226-af676acdab45",
  20400,
  2,
  2,
  2,
  "2de1feec-a19a-4f16-9226-af676acdab45"
),
(
  "3df1feec-a19a-4f16-9226-af676acdab46",
  25200,
  1,
  3,
  2,
  "2df1feec-a19a-4f16-9226-af676acdab46"
),
(
  "3de1feec-a19a-4f16-9226-af682acdab47",
  28000,
  1,
  3,
  2,
  "3de1feec-a19a-4f16-9226-af682acdab47"
),
(
  "3de1feec-a19a-4f11-9226-af682acdab48",
  42000,
  2,
  2,
  3,
  "3de1feec-a19a-4f11-9226-af682acdab48"
),
(
  "3de1feec-a19a-4f16-9226-af686acdab49",
  18000,
  3,
  1,
  1,
  "3de1feec-a19a-4f16-9226-af686acdab49"
),
(
  "3de1feec-a19a-4f16-9226-af676acdab50",
  24000,
  2,
  2,
  2,
  "3de1feec-a19a-4f16-9226-af676acdab50"
),
(
  "3df1feec-a19a-4f16-9226-af676acdab51",
  30000,
  1,
  3,
  2,
  "3df1feec-a19a-4f16-9226-af676acdab51"
);

insert into job_offer_has_programming_languages (job_offer_id, programming_languages_id) values
("3de1feec-a19a-4f16-9226-af682acdab42", 12),
("3de1feec-a19a-4f11-9226-af682acdab43", 1),
("3de1feec-a19a-4f11-9226-af682acdab43", 17),
("3de1feec-a19a-4f16-9226-af686acdab44", 6),
("3de1feec-a19a-4f16-9226-af686acdab44", 9),
("3de1feec-a19a-4f16-9226-af686acdab44", 14),
("3de1feec-a19a-4f16-9226-af676acdab45", 2),
("3de1feec-a19a-4f16-9226-af676acdab45", 1),
("3de1feec-a19a-4f16-9226-af676acdab45", 8),
("3df1feec-a19a-4f16-9226-af676acdab46", 6),
("3df1feec-a19a-4f16-9226-af676acdab46", 4),
("3de1feec-a19a-4f16-9226-af682acdab47", 12),
("3de1feec-a19a-4f11-9226-af682acdab48", 1),
("3de1feec-a19a-4f11-9226-af682acdab48", 17),
("3de1feec-a19a-4f16-9226-af686acdab49", 6),
("3de1feec-a19a-4f16-9226-af686acdab49", 9),
("3de1feec-a19a-4f16-9226-af686acdab49", 14),
("3de1feec-a19a-4f16-9226-af676acdab50", 2),
("3de1feec-a19a-4f16-9226-af676acdab50", 1),
("3de1feec-a19a-4f16-9226-af676acdab50", 8),
("3df1feec-a19a-4f16-9226-af676acdab51", 6),
("3df1feec-a19a-4f16-9226-af676acdab51", 4);

insert into missions (missions, enterprise_id) values
("Développer une application mobile de gestion des tâches pour la plateforme Android", "2de1feec-a19a-4f16-9226-af682acdab42"),
("Créer un système de suivi des stocks et des commandes pour une entreprise de commerce électronique", "2de1feec-a19a-4f16-9226-af682acdab42"),
("Concevoir et mettre en œuvre un algorithme de recommandation personnalisée pour une plateforme de streaming vidéo", "2de1feec-a19a-4f11-9226-af682acdab43"),
("Effectuer une analyse de données approfondie pour identifier les tendances de marché pour une entreprise de recherche marketing", "2de1feec-a19a-4f11-9226-af682acdab43"),
("Développer un site Web interactif et convivial pour une start-up de commerce électronique", "2de1feec-a19a-4f16-9226-af686acdab44"),
("Concevoir et implémenter un système de gestion de contenu robuste pour une agence de marketing numérique", "2de1feec-a19a-4f16-9226-af686acdab44"),
("Créer une application de suivi de fitness personnalisée pour une entreprise de santé et de bien-être", "2de1feec-a19a-4f16-9226-af676acdab45"),
("Développer un système de gestion de la relation client (CRM) sur mesure pour une société de conseil en gestion", "2de1feec-a19a-4f16-9226-af676acdab45"),
("Concevoir et mettre en œuvre un algorithme d''apprentissage automatique pour une entreprise de technologie", "2df1feec-a19a-4f16-9226-af676acdab46"),
("Développer une application de planification financière pour une société de services financiers", "2df1feec-a19a-4f16-9226-af676acdab46"),
("Développer une application mobile de gestion des commandes pour la plateforme iOS", "3de1feec-a19a-4f16-9226-af682acdab47"),
("Créer un système de suivi des ventes et des clients pour une entreprise de commerce en ligne", "3de1feec-a19a-4f11-9226-af682acdab48"),
("Concevoir et mettre en œuvre un algorithme de recommandation de produits pour une plateforme de commerce électronique", "3de1feec-a19a-4f16-9226-af686acdab49"),
("Effectuer une analyse de données pour optimiser les opérations de livraison pour une entreprise de logistique", "3de1feec-a19a-4f16-9226-af686acdab49"),
("Développer un site Web réactif et intuitif pour une startup de tourisme", "3de1feec-a19a-4f16-9226-af676acdab50"),
("Concevoir et mettre en œuvre un système de gestion des stocks pour une entreprise de distribution", "3de1feec-a19a-4f16-9226-af676acdab50"),
("Créer une application de suivi des performances pour une startup de remise en forme", "3df1feec-a19a-4f16-9226-af676acdab51"),
("Développer un système de réservation en ligne pour une entreprise de voyages", "3df1feec-a19a-4f16-9226-af676acdab51"),
("Concevoir et mettre en œuvre un algorithme d'apprentissage automatique pour une startup de santé", "3de1feec-a19a-4f16-9226-af686acdab49"),
("Développer une application de gestion de portefeuille pour une startup financière", "3de1feec-a19a-4f11-9226-af682acdab48");

insert into candidate (id, firstname, lastname, email, password, department_id) values
(
  "2de1feec-a19a-4f16-9226-af782acdab42",
  "Lucas",
  "Garcia",
  "candidate@gmail.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  32
),
(
  "2de1feec-a19a-4f16-9226-af752acdab43",
  "Emma",
  "Roux",
  "emma.roux@example.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  13
),
(
  "2de1feec-a12a-4f16-9226-af752acdab44",
  "Thomas",
  "Lefevre",
  "thomas.lefevre@example.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  45
),
(
  "2de2feec-a12a-4f16-9226-af752acdab45",
  "Julie",
  "Martin",
  "julie.martin@example.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  4
),
(
  "2de1feec-a12a-4f26-9226-af752acdab46",
  "Antoine",
  "Dubois",
  "antoine.dubois@example.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  75
),
(
  "2de1feec-a19a-4f16-9226-af792acdab42",
  "Sophie",
  "Moreau",
  "sophie.moreau@example.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  75
),
(
  "2de1feec-a19a-4f16-9226-af762acdab43",
  "Pierre",
  "Leroy",
  "pierre.leroy@example.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  28
),
(
  "2de1feec-a12a-4f16-9226-af762acdab44",
  "Camille",
  "Dubois",
  "camille.dubois@example.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  34
),
(
  "2de2feec-a12a-4f16-9226-af762acdab45",
  "Nicolas",
  "Muller",
  "nicolas.muller@example.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  6
),
(
  "2de1feec-a12a-4f26-9226-af762acdab46",
  "Juliette",
  "Girard",
  "juliette.girard@example.com",
  "$argon2id$v=19$m=19456,t=2,p=1$bMQ1ZujvsLQx6ansi4CHoQ$DENsQ9QIZs5HTAByVCuIIkBxReBkPmdyBCkyWSn4byA",
  5
);

insert into levels (level) values
("Junior"),
("Mid-level"),
("Senior");

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

insert into resume (id, biography, appetences_id, candidate_id, contract_types_id, work_rhythms_id, level_id) values
(
  "2de1feec-a19a-4f16-9226-af782acdab47",
  "Bonjour, je suis Lucas Garcia. Passionné d'informatique, j'aime coder des applications web et découvrir de nouveaux langages de programmation.",
  1,
  "2de1feec-a19a-4f16-9226-af782acdab42",
  1,
  1,
  2
),
(
  "2de1feec-a19a-4f16-9226-af752acdab46",
  "Salut, je suis Emma Roux. Je m'intéresse particulièrement à la sécurité informatique et aux systèmes distribués.",
  3,
  "2de1feec-a19a-4f16-9226-af752acdab43",
  2,
  2,
  3
),
(
  "2de1feec-a12a-4f16-9226-af752acdab45",
  "Hello, je suis Thomas Lefevre. Mon domaine de prédilection est le développement mobile et les applications Android.",
  2,
  "2de1feec-a12a-4f16-9226-af752acdab44",
  1,
  3,
  1
),
(
  "2de2feec-a12a-4f16-9226-af752acdab43",
  "Hi, je suis Julie Martin. Je suis passionnée par l'intelligence artificielle et les algorithmes d'apprentissage automatique.",
  3,
  "2de2feec-a12a-4f16-9226-af752acdab45",
  3,
  2,
  1
),
(
  "2de1feec-a12a-4f26-9226-af752acdab44",
  "Salutations, je suis Antoine Dubois. J'aime explorer le monde du développement logiciel et contribuer à des projets open source.",
  1,
  "2de1feec-a12a-4f26-9226-af752acdab46",
  2,
  1,
  2
),
(
  "2de1feec-a19a-4f16-9226-af792acdab47",
  "Bonjour, je suis Sophie Moreau. Je suis passionnée par la conception d'interfaces utilisateur élégantes et intuitives pour les applications web et mobiles.",
  2,
  "2de1feec-a19a-4f16-9226-af792acdab42",
  2,
  2,
  2
),
(
  "2de1feec-a19a-4f16-9226-af762acdab46",
  "Salut, je suis Pierre Leroy. Je suis un développeur fullstack expérimenté avec une passion pour l'optimisation des performances et la sécurité des applications.",
  3,
  "2de1feec-a19a-4f16-9226-af762acdab43",
  1,
  3,
  3
),
(
  "2de1feec-a12a-4f16-9226-af762acdab45",
  "Hello, je suis Camille Dubois. Je suis spécialisé dans le développement d'applications mobiles réactives et rapides pour les plates-formes iOS et Android.",
  1,
  "2de1feec-a12a-4f16-9226-af762acdab44",
  1,
  1,
  2
),
(
  "2de2feec-a12a-4f16-9226-af762acdab43",
  "Hi, je suis Nicolas Muller. Je suis passionné par l'exploration des dernières technologies et par la création d'applications innovantes pour résoudre des problèmes du monde réel.",
  3,
  "2de2feec-a12a-4f16-9226-af762acdab45",
  3,
  2,
  1
),
(
  "2de1feec-a12a-4f26-9226-af762acdab44",
  "Salutations, je suis Juliette Girard. Je suis une développeuse back-end compétente avec une solide expérience dans la conception et le déploiement de services web à haute disponibilité.",
  2,
  "2de1feec-a12a-4f26-9226-af762acdab46",
  2,
  1,
  2
);

insert into resume_has_programming_languages (resume_id, programming_languages_id) values
("2de1feec-a19a-4f16-9226-af782acdab47", 5),
("2de1feec-a19a-4f16-9226-af782acdab47", 7),
("2de1feec-a19a-4f16-9226-af782acdab47", 4),
("2de1feec-a19a-4f16-9226-af752acdab46", 1),
("2de1feec-a19a-4f16-9226-af752acdab46", 10),
("2de1feec-a19a-4f16-9226-af752acdab46", 17),
("2de1feec-a12a-4f16-9226-af752acdab45", 6),
("2de1feec-a12a-4f16-9226-af752acdab45", 17),
("2de1feec-a12a-4f16-9226-af752acdab45", 12),
("2de2feec-a12a-4f16-9226-af752acdab43", 9),
("2de2feec-a12a-4f16-9226-af752acdab43", 10),
("2de2feec-a12a-4f16-9226-af752acdab43", 11),
("2de1feec-a12a-4f26-9226-af752acdab44", 8),
("2de1feec-a12a-4f26-9226-af752acdab44", 6),
("2de1feec-a12a-4f26-9226-af752acdab44", 19),
("2de1feec-a19a-4f16-9226-af792acdab47", 12),
("2de1feec-a19a-4f16-9226-af792acdab47", 10),
("2de1feec-a19a-4f16-9226-af792acdab47", 19),
("2de1feec-a19a-4f16-9226-af762acdab46", 1),
("2de1feec-a19a-4f16-9226-af762acdab46", 6),
("2de1feec-a19a-4f16-9226-af762acdab46", 17),
("2de1feec-a12a-4f16-9226-af762acdab45", 12),
("2de1feec-a12a-4f16-9226-af762acdab45", 17),
("2de1feec-a12a-4f16-9226-af762acdab45", 6),
("2de2feec-a12a-4f16-9226-af762acdab43", 9),
("2de2feec-a12a-4f16-9226-af762acdab43", 10),
("2de2feec-a12a-4f16-9226-af762acdab43", 11),
("2de1feec-a12a-4f26-9226-af762acdab44", 8),
("2de1feec-a12a-4f26-9226-af762acdab44", 6),
("2de1feec-a12a-4f26-9226-af762acdab44", 19);

insert into resume_has_soft_skills (resume_id, soft_skills_id) values
("2de1feec-a19a-4f16-9226-af782acdab47", 5),
("2de1feec-a19a-4f16-9226-af782acdab47", 2),
("2de1feec-a19a-4f16-9226-af782acdab47", 4),
("2de1feec-a19a-4f16-9226-af752acdab46", 3),
("2de1feec-a19a-4f16-9226-af752acdab46", 10),
("2de1feec-a19a-4f16-9226-af752acdab46", 14),
("2de1feec-a12a-4f16-9226-af752acdab45", 6),
("2de1feec-a12a-4f16-9226-af752acdab45", 10),
("2de1feec-a12a-4f16-9226-af752acdab45", 12),
("2de2feec-a12a-4f16-9226-af752acdab43", 6),
("2de2feec-a12a-4f16-9226-af752acdab43", 10),
("2de2feec-a12a-4f16-9226-af752acdab43", 8),
("2de1feec-a12a-4f26-9226-af752acdab44", 8),
("2de1feec-a12a-4f26-9226-af752acdab44", 4),
("2de1feec-a12a-4f26-9226-af752acdab44", 12),
("2de1feec-a19a-4f16-9226-af792acdab47", 5),
("2de1feec-a19a-4f16-9226-af792acdab47", 2),
("2de1feec-a19a-4f16-9226-af792acdab47", 4),
("2de1feec-a19a-4f16-9226-af762acdab46", 3),
("2de1feec-a19a-4f16-9226-af762acdab46", 10),
("2de1feec-a19a-4f16-9226-af762acdab46", 14),
("2de1feec-a12a-4f16-9226-af762acdab45", 6),
("2de1feec-a12a-4f16-9226-af762acdab45", 10),
("2de1feec-a12a-4f16-9226-af762acdab45", 12),
("2de2feec-a12a-4f16-9226-af762acdab43", 6),
("2de2feec-a12a-4f16-9226-af762acdab43", 10),
("2de2feec-a12a-4f16-9226-af762acdab43", 8),
("2de1feec-a12a-4f26-9226-af762acdab44", 8),
("2de1feec-a12a-4f26-9226-af762acdab44", 4),
("2de1feec-a12a-4f26-9226-af762acdab44", 12);

insert into experiences (candidate_id, job_title, company, experiences) values
(
  "2de1feec-a19a-4f16-9226-af782acdab42",
  "Développeur back-end",
  "Amazon",
  "Conception et développement de services web sécurisés en utilisant Node.js et Express. Intégration de bases de données relationnelles et non relationnelles pour optimiser les performances et la scalabilité."
),
(
  "2de1feec-a19a-4f16-9226-af782acdab42",
  "Développeur fullstack",
  "Ebay",
  "Création d'une application e-commerce complète en utilisant React pour le front-end et Node.js pour le back-end. Gestion des flux de données, des authentifications et des paiements en ligne."
),
(
  "2de1feec-a19a-4f16-9226-af752acdab43",
  "Développeur back-end",
  "Google",
  "Développement d'APIs robustes et évolutives en utilisant Python et Django. Optimisation des performances et de la sécurité des applications web à grande échelle."
),
(
  "2de1feec-a19a-4f16-9226-af752acdab43",
  "Développeur fullstack",
  "Leclerc",
  "Implémentation de fonctionnalités front-end avancées en utilisant Angular et développement de services back-end RESTful avec Java et Spring Boot. Collaboration étroite avec les équipes de conception pour assurer une expérience utilisateur optimale."
),
(
  "2de1feec-a12a-4f16-9226-af752acdab44",
  "Développeur back-end",
  "Lycos",
  "Création d'applications web évolutives en utilisant Ruby on Rails. Conception et développement de bases de données performantes et scalables pour répondre aux besoins de l'entreprise."
),
(
  "2de1feec-a12a-4f16-9226-af752acdab44",
  "Développeur fullstack",
  "Tinder",
  "Développement de fonctionnalités innovantes pour une application de rencontres populaire en utilisant React Native pour le front-end mobile et Node.js pour le back-end. Intégration de services tiers et optimisation des performances."
),
(
  "2de1feec-a12a-4f16-9226-af752acdab44",
  "Développeur back-end",
  "AOL",
  "Conception et développement d'applications web haute disponibilité en utilisant PHP et Laravel. Gestion des bases de données MySQL et mise en place de stratégies de sauvegarde et de récupération des données."
),
(
  "2de2feec-a12a-4f16-9226-af752acdab45",
  "Développeur fullstack",
  "Free",
  "Développement d'une plateforme de gestion de contenu personnalisable en utilisant Vue.js pour le front-end et Node.js avec MongoDB pour le back-end. Mise en œuvre de fonctionnalités collaboratives et de gestion des droits d'accès."
),
(
  "2de1feec-a12a-4f26-9226-af752acdab46",
  "Développeur back-end",
  "Orange",
  "Création et maintenance de services web critiques pour les opérations internes en utilisant Java et Spring. Intégration de solutions de sécurité avancées pour protéger les données sensibles de l'entreprise."
),
(
  "2de1feec-a12a-4f26-9226-af752acdab46",
  "Développeur fullstack",
  "Peugeot",
  "Développement d'applications de gestion de la chaîne logistique en utilisant React pour le front-end et Java avec Spring Boot pour le back-end. Collaboration avec les équipes métier pour identifier et résoudre les problèmes opérationnels."
),
(
  "2de1feec-a19a-4f16-9226-af792acdab42",
  "Développeur front-end",
  "Microsoft",
  "Conception et développement d'interfaces utilisateur interactives et réactives en utilisant Angular et Vue.js. Collaboration étroite avec les équipes de conception pour créer des expériences utilisateur exceptionnelles."
),
(
  "2de1feec-a19a-4f16-9226-af792acdab42",
  "Développeur mobile",
  "Apple",
  "Développement d'applications iOS de haute qualité en utilisant Swift et SwiftUI. Intégration de fonctionnalités avancées telles que la réalité augmentée et la géolocalisation."
),
(
  "2de1feec-a19a-4f16-9226-af762acdab43",
  "Développeur back-end",
  "Facebook",
  "Conception et développement de services web évolutifs en utilisant PHP et Laravel. Intégration de solutions de sécurité avancées pour protéger les données des utilisateurs."
),
(
  "2de1feec-a19a-4f16-9226-af762acdab43",
  "Développeur fullstack",
  "Instagram",
  "Création de fonctionnalités front-end innovantes en utilisant React et développement de services back-end RESTful avec Node.js. Optimisation des performances pour gérer des millions d'utilisateurs simultanés."
),
(
  "2de1feec-a12a-4f16-9226-af762acdab44",
  "Développeur back-end",
  "Twitter",
  "Développement d'APIs robustes et évolutives en utilisant Python et Django. Conception de bases de données performantes pour stocker et gérer les données des utilisateurs."
),
(
  "2de1feec-a12a-4f16-9226-af762acdab44",
  "Développeur fullstack",
  "Snapchat",
  "Conception et développement de fonctionnalités front-end attrayantes en utilisant React Native. Création de services back-end RESTful avec Node.js pour prendre en charge les interactions en temps réel."
),
(
  "2de1feec-a12a-4f16-9226-af762acdab44",
  "Développeur back-end",
  "LinkedIn",
  "Développement d'applications web haute disponibilité en utilisant Java et Spring. Intégration de solutions de sécurité avancées pour protéger les données des utilisateurs."
),
(
  "2de2feec-a12a-4f16-9226-af762acdab45",
  "Développeur fullstack",
  "Netflix",
  "Conception et développement de fonctionnalités front-end interactives en utilisant React. Création de services back-end évolutifs avec Node.js pour prendre en charge les demandes des utilisateurs à grande échelle."
),
(
  "2de1feec-a12a-4f26-9226-af762acdab46",
  "Développeur back-end",
  "Amazon Web Services",
  "Conception et développement de services web sécurisés et évolutifs en utilisant Java et Spring. Mise en œuvre de solutions de sécurité avancées pour protéger les données des clients."
),
(
  "2de1feec-a12a-4f26-9226-af762acdab46",
  "Développeur fullstack",
  "Microsoft Azure",
  "Développement d'applications cloud évolutives en utilisant Angular pour le front-end et Node.js pour le back-end. Gestion des bases de données NoSQL pour stocker et gérer les données des clients."
);

insert into enterprise_like (enterprise_id, resume_id) values 
("2de1feec-a19a-4f11-9226-af682acdab43", "2de1feec-a19a-4f16-9226-af782acdab47"),
("2de1feec-a19a-4f11-9226-af682acdab43", "2de1feec-a12a-4f26-9226-af752acdab44");

insert into candidate_like (candidate_id, job_offer_id) values
("2de1feec-a19a-4f16-9226-af782acdab42", "3de1feec-a19a-4f11-9226-af682acdab43"),
("2de1feec-a19a-4f16-9226-af782acdab42", "3de1feec-a19a-4f16-9226-af682acdab42");