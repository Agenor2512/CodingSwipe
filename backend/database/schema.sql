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