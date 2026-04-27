const express = require('express');
const app = express();
const porta = 8080;

// IMPORTANTE: Esse é o "tradutor" que permite ao Node ler os dados do formulário HTML!
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota POST que implementa o método salvarContato() do Diagrama UML
app.post('/finalizar-venda', (req, res) => {
   
    // Agora usamos req.body porque os dados vêm escondidos do formulário HTML!
        let nomeProduto = req.body.nomeProduto
        let precoUnitario = req.body.precoUnitario
        let quanidade = req.body.quantiade

});

app.listen(porta, () => {
    console.log(`Servidor rodando! Aguardando o formulário HTML na porta ${porta}...`);
});