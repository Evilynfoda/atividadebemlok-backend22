const express = require('express');
const app = express();
const porta = 8080;

// IMPORTANTE: Esse é o "tradutor" que permite ao Node ler os dados do formulário HTML!
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota POST que implementa o método salvarContato() do Diagrama UML
app.post('/finalizar-venda', (req, res) => {

    // Agora usamos req.body porque os dados vêm escondidos do formulário HTML!
    let nomeProduto = req.body.nomeProduto;
    let precoUnitario = req.body.precoUnitario;
    let quantidade = req.body.quantiade;
    let cupom = req.body.cupom;

    let valorTotal = quantidade * precoUnitario;

    if (quantiade < 1 || preco <= 0) {
        res.status(400).json({
            erro: "valor invalido",
            mensagem: "Insira um valor valido"
        })
    }

    if (cupom === "PROMO20") {
        valorTotal = valorTotal * 0.8;
        console.log("cupom aplicado! desconto de 20% consedido");
    }

    res.status(201).json({
        mensagem: "venda processada com sucesso! o seu pedido foi criado ",
        sucesso: "venda realizada com sucesso"
    })

});

app.listen(porta, () => {
    console.log(`Servidor rodando! Aguardando o formulário HTML na porta ${porta}...`);
});