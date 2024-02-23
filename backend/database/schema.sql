CREATE TABLE company(
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  company_name VARCHAR(100) NOT NULL,
  siret_number INT NOT NULL,
  email VARCHAR(100) NOT NULL, /* Mettre en email unique*/
  departement INT NOT NULL,
  password VARCHAR(100) NOT NULL,
  legal_status VARCHAR(100) NOT NULL,
  business_sector VARCHAR(100) NOT NULL,
  company_description TEXT NOT NULL
);

INSERT INTO company (company_name, siret_number, email, departement, password, legal_status, business_sector, company_description)
VALUES
('Carrefour', 123456, 'rébecca@carrefour.fr', 91, 'rebeccalaplusbelle', 'SAS', 'grande-distribution', 'Acteur mondial de la grande distribution'),
('Lidl', 214654, 'lidl@lidl.fr', 35, 'LidlBglesprix', 'SAS', 'grande-distribution', 'Acteur mondial de la grande distribution'),
('Google', 657392, 'marielle@google.fr', 75, 'minouchelechat', 'SAS', 'Informatique', 'Vous connaissez pas Google??');