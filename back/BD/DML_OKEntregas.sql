USE OKEntregas

INSERT INTO Usuarios	(Nome, Sobrenome, Email, Senha, VerificacaoEmail, IdTipoUsuario)
VALUES                  ('Daniel', 'Ferreira', 'daniel@gmail.com', '123',1, 1),
						('Alan', 'Malu', 'alan@gmail.com', '123', 1, 1)

INSERT INTO TipoUsuario (TipoUsuario)
VALUES		('Administrador'),
			('Vendedor')
INSERT INTO Empresa	(NomeEmpresa, NumeroDeFuncionarios, NumeroDeTelefone, EmailEmpresa, NomeFantasia, Cnpj, SegmentoDeMercado)
VALUES                  ('EmpresaStl1', 12, 11971697877,'EmStl1@gmail.com', 'STL1', '123456789123', 'Tecnologia'),
						('EmpresaStl2', 30, 11971697877,'EmStl2@gmail.com', 'STL2', '123456789123', 'Gastronomia'),
						('EmpresaStl3', 40, 11971697877,'EmStl3@gmail.com', 'STL3', '123456789123', 'Eletrica')

INSERT INTO UsuarioLeads	(Email, statusLead, Cargo, Nome)
VALUES                  ( 'Kleber@gmail.com', 'ativo','Dev FullStack', 'Kleber'),
						( 'Alan@gmail.com', 'ativo','Dev FrontEnd', 'Alan'),
						( 'Caic@gmail.com', 'ativo','Dev BackEnd', 'Caic')

INSERT INTO Leads	(Score, Telefone, Necessidades, IdUsuarioLeads, IdEmpresa)
VALUES                  ('Medio','1140028922', 'Analista Sistema',  1, 1),
						('Alto','1140028922', 'Avaliador Industrial',  2, 2),
						('Baixo','1140028922', 'Gerente de marketing', 2, 3)

							
INSERT INTO Reuniao	(DataInicio, DataTermino, ATA, IdUsuario, IdLeads)
VALUES                  ('2021-12-09 15:45:21' , '2021-12-09 16:00:08', 'FADWA1', 1, 1),
						('2021-11-09 15:45:21' , '2008-11-09 16:00:40', 'FADWA2', 1, 3),
						('2021-10-09 15:45:21' , '2008-10-09 16:00:21', 'FADWA3', 1, 2)

