USE OKEntregas

INSERT INTO TipoUsuario (TipoUsuario)
VALUES		('Administrador'),
			('Vendedor')

INSERT INTO Usuarios	(Nome, Sobrenome, Email, Senha, IdTipoUsuario,VerificacaoEmail)
VALUES                  ('Daniel', 'Ferreira', 'daniel@gmail.com', '123', 1,1),
						('Alan', 'Malu', 'alan@gmail.com', '123', 1,1)


			
INSERT INTO Empresa	(NomeEmpresa, NumeroDeFuncionarios, NumeroDeTelefone, EmailEmpresa, NomeFantasia, Cnpj, SegmentoDeMercado)
VALUES                  ('EmpresaStl1', 12, '11971697877','EmStl1@gmail.com', 'STL1', '123456789123', 'Tecnologia'),
						('EmpresaStl2', 30, '11971697877','EmStl2@gmail.com', 'STL2', '123456789123', 'Gastronomia'),
						('EmpresaStl3', 40, '11971697877','EmStl3@gmail.com', 'STL3', '123456789123', 'Eletrica')


INSERT INTO Leads	(statusLead, Nome, Email, Cargo, Score, Telefone, Necessidades, IdEmpresa)
VALUES                  ('Ativo','José','Jose@gmmail.com','Administrador', 'Medio',  '11971697877', 'Controle de acesso',1),
						('Inativo','Fael','Ze@gmmail.com','Instrutor', 'Alta',  '11971697877', 'Controle de gestão', 2),
						('Ativo','Pelé','Pele@gmmail.com','Recepcionista', 'Baixo','11971697877',  'Controle de monitoriamento', 3)

INSERT INTO Contato	(IdEmpresa, IdLeads, Titulo, Descricao, DataCriacao, Favoritar)
VALUES                  (1,1,'Andre still','Dono da still', '2008-11-11 13:23:44' , 1) 
					

							
