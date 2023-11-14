const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost', // ou o endereço do seu servidor de banco de dados
  user: 'root', // seu usuário do MySQL
  password: 'nicolas123', // sua senha do MySQL
  database: 'new_beach' // seu banco de dados
});

// Conectar ao MySQL
connection.connect(error => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados MySQL:', error);
    return;
  }
  console.log('Conexão com o MySQL foi estabelecida com sucesso.');
});

app.post('/submit-form', (req, res) => {
  const { nome, email, telefone } = req.body; 
  const query = 'INSERT INTO formulario (nome, email, telefone) VALUES (?, ?, ?)';
  connection.query(query, [nome, email, telefone], (error, results) => {
    if (error) {
      console.error('Erro ao enviar formulário:', error);
      res.status(500).send('Erro ao enviar formulário: ' + error);
      return;
    }
    console.log('Formulário enviado com sucesso:', results);
    res.status(200).send('Formulário enviado com sucesso!');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
