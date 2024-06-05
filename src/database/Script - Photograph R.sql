create database photoRufinos;
use photoRufinos;

create table usuario(
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45));

create table quizIniciante(
id int primary key auto_increment,
qndPontos int,
qndAcertos int,
qndErros int,
fkUsuario int,
foreign key (fkUsuario) references usuario(id));

create table quizExperiente(
id int primary key auto_increment,
qndPontos int,
qndAcertos int,
qndErros int,
fkUsuario int,
foreign key (fkUsuario) references usuario(id));

create table avaliacao(
id int primary key auto_increment,
nota int,
fkUsuario int unique,
foreign key (fkUsuario) references usuario(id));
