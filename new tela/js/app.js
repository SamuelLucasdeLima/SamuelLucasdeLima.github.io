const mysql = require('mysql');

// Configurações para conexão ao banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mifis'
});

// Estabelece a conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão ao banco de dados MySQL estabelecida!');
  
  // Exemplo de inserção de um novo usuário
  const novoUsuario = {
    username: 'novousuario',
    password: 'senha123',
    telefone: '123456789'
  };
  
  connection.query('INSERT INTO usuarios SET ?', novoUsuario, (error, results, fields) => {
    if (error) {
      console.error('Erro ao adicionar usuário:', error);
      return;
    }
    console.log('Novo usuário adicionado. ID:', results.insertId);
  });
});

// Fecha a conexão ao finalizar
connection.end();
