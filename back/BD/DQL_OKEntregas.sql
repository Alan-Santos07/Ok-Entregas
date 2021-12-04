USE OKEntregas

SELECT IdUsuario,  Nome, Sobrenome, Email, Senha, TipoUsuario,VerificacaoEmail 
INNER JOIN Tipo
FROM   Usuarios; 
/* Arrumar tabela de usuário */

SELECT * FROM TipoUsuario
 
SELECT IdEmpresa,  NomeEmpresa, NumeroDeFuncionarios, NumeroDeTelefone, EmailEmpresa, NomeFantasia, Cnpj, SegmentoDeMercado
FROM   Empresa;

SELECT IdLeads, statusLead, Nome, Email, Cargo, Score, Telefone, Necessidades, NomeEmpresa, NumeroDeFuncionarios, NumeroDeTelefone, EmailEmpresa, NomeFantasia, Cnpj, SegmentoDeMercado FROM Leads INNER JOIN Empresa
ON Empresa.IdEmpresa = Leads.IdEmpresa;

SELECT IdContato, Titulo, Descricao, DataCriacao, Favoritar, NomeEmpresa, Nome,Cargo FROM Contato 
INNER JOIN Empresa ON Contato.IdEmpresa = Empresa.IdEmpresa
INNER JOIN Leads ON Contato.IdLeads = Leads.IdLeads

