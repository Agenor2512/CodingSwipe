CREATE TABLE company(
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  name VARCHAR(100) NOT NULL,
  siret INT NOT NULL,
  legal_status VARCHAR(100) NOT NULL,
  business_sector VARCHAR(100) NOT NULL,
  description TEXT NOT NULL
);

INSERT INTO company (name, siret, legal_status, business_sector, description)
VALUES
('Carrefour', 123456, 'SAS', 'grande-distribution', 'Acteur mondial de la grande distribution'),
('Lidl', 214654,'SAS', 'grande-distribution', 'Acteur mondial de la grande distribution'),
('Google', 657392,'SAS', 'Informatique', 'Vous connaissez pas Google??');