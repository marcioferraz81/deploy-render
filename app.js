// Importa o framework Express (biblioteca para criar servidor web)
const express = require("express");

// Cria uma instância do aplicativo Express
const app = express();

// Importa o módulo 'path' do Node.js (usado para trabalhar com caminhos de arquivos/pastas)
const path = require("path");


// 🔥 CONFIGURAR EJS

// Define o EJS como mecanismo de visualização (template engine)
// Permite usar arquivos .ejs dentro da pasta views
app.set("view engine", "ejs");

// Define o caminho da pasta onde estão as views (telas)
// __dirname = pasta atual do projeto
app.set("views", path.join(__dirname, "views"));


// Middleware que permite receber dados de formulários (POST)
// extended: true → permite enviar objetos mais complexos
app.use(express.urlencoded({ extended: true }));


// ROTAS

// Importa as rotas de categorias
const categoriaRoutes = require("./routes/categoriaRoutes");

// Define que todas as rotas de categorias começam com "/categorias"
// Ex: /categorias, /categorias/salvar, etc.
app.use("/categorias", categoriaRoutes);


// ROTA PRINCIPAL

// Quando acessar a raiz do site (http://localhost:3000/)
app.get("/", (req, res) => {

  // Renderiza a página index.ejs que está dentro da pasta views
  res.render("index");
});


// INICIA O SERVIDOR
// Faz o servidor rodar na porta 3000 ou na porta definida na variável de ambiente PORT (útil para deploy em serviços como Render, Heroku, etc.)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando..." + (PORT === 3000 ? " em http://localhost:3000" : " na porta " + PORT));
});