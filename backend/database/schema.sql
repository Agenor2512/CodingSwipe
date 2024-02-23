create table candidate (
  id int unsigned primary key auto_increment not null,
  lastname varchar(100) not null,
  firstname varchar(100) not null,
  email varchar(100) not null,
  department varchar(100) not null,
  _password varchar(100) not null,
  appetence  varchar(100) not null,
  job_type  varchar(100) not null,
  work_rhythm  varchar(100) not null,
  experience_level  varchar(100) not null,
  programming_languages  varchar(100) not null
);

insert into candidate (lastname, firstname, email, department, _password, appetence, job_type, work_rhythm, experience_level, programming_languages) 
values("Poulin", "Léa", "kikou@gmail.com", "37", "kikou", "frontend", "CDI", "remote", "junior", "JS"), ("Vasseur", "Noémie", "kikou2@gmail.com", "62", "root", "backend", "CDI", "remote", "junior", "bash");
