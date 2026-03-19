# 📚 Sistema CRUD com Node.js + Firebase
## 🚀 Sobre o Projeto
Este projeto consiste em um sistema CRUD (Create, Read, Update, Delete) desenvolvido com Node.js, utilizando o framework Express, templates EJS e integração com o Firebase Realtime Database.

---

## 📂 Funcionalidades

- Cadastro de categorias  
- Listagem de categorias  
- Edição de categorias  
- Exclusão de categorias  

---

## 🛠️ Tecnologias Utilizadas

- Node.js  
- Express  
- EJS  
- Firebase  
- Bootstrap  

---

## ⚙️ Como Executar

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
npx nodemon app.js

## 🔥 Configuração do Firebase (Passo a Passo Completo)

### 📌 1. Acessar o Firebase

Acesse o site oficial:
https://console.firebase.google.com/

---

### 📌 2. Criar um Projeto

* Clique em **"Adicionar projeto"**
* Digite o nome do projeto
* Clique em **Continuar**
* Desative o Google Analytics (opcional)
* Clique em **Criar projeto**

---

### 📌 3. Criar o Realtime Database

* No menu lateral, clique em **Realtime Database**
* Clique em **Criar banco de dados**
* Escolha a localização
* Inicie em:

👉 **Modo bloqueado (recomendado)**

---

### 📌 4. Gerar a chave JSON (IMPORTANTE)

* Vá em:
  ⚙️ **Configurações do projeto**

* Clique na aba:
  👉 **Contas de serviço**

* Clique no botão:
  👉 **Gerar nova chave privada**

* Confirme e faça o download do arquivo

---

### 📌 5. Configurar no Projeto

1. Renomeie o arquivo para:

```
serviceAccountKey.json
```

2. Crie a pasta:

```
/config
```

3. Coloque o arquivo dentro:

```
/config/serviceAccountKey.json
```

---

### 📌 6. Instalar dependência

```bash
npm install firebase-admin
```

---

### 📌 7. Criar conexão com Firebase

Crie o arquivo `/config/firebase.js`:

```js
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://SEU-PROJETO.firebaseio.com"
});

const db = admin.database();

module.exports = db;
```

---

### ⚠️ Observações Importantes

* Nunca subir o arquivo JSON para o GitHub
* Adicionar no `.gitignore`:

```
/config/serviceAccountKey.json
```

* Verifique se a URL do database está correta

---

### ✅ Teste de Funcionamento

Se não aparecer erro ao iniciar o servidor:

```bash
npx nodemon app.js
```

👉 Firebase está configurado corretamente 🎉

🚀 🌐 PUBLICAÇÃO NO RENDER (PASSO A PASSO COMPLETO)
🧱 ETAPA 1 — PREPARAR O PROJETO
📌 1.1 Ajustar a porta (OBRIGATÓRIO)

No seu app.js:

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando...");
});


👉 Sem isso, o Render não funciona.

📌 1.2 Configurar package.json

Abra o package.json e garanta:

"scripts": {
  "start": "node app.js"
}

📌 1.3 Criar .gitignore

Crie o arquivo:

node_modules
/config/serviceAccountKey.json
.env


👉 🔥 MUITO IMPORTANTE: nunca subir o JSON do Firebase

📌 1.4 Testar localmente
npm install
npx nodemon app.js


👉 Acesse:

http://localhost:3000

🔥 ETAPA 2 — SUBIR PARA O GITHUB
git init
git add .
git commit -m "projeto pronto para deploy"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repo.git
git push -u origin main

🌐 ETAPA 3 — CRIAR CONTA NO RENDER

Acesse:
👉 https://render.com/

Clique em:
👉 Get Started

Faça login com:
👉 GitHub

⚙️ ETAPA 4 — CRIAR SERVIÇO

Clique:
👉 New +

Escolha:
👉 Web Service

Selecione seu repositório

🧩 ETAPA 5 — CONFIGURAÇÃO DO SERVIÇO

Preencha:

📌 Nome
crud-node-firebase

📌 Environment
Node

📌 Branch
main

📌 Build Command
npm install

📌 Start Command
npm start

🔐 ETAPA 6 — CONFIGURAR FIREBASE (PARTE MAIS IMPORTANTE)
❌ ERRO COMUM:

Não subir o JSON no GitHub

✅ SOLUÇÃO PROFISSIONAL
📌 6.1 Abrir o JSON do Firebase

Arquivo:

serviceAccountKey.json


Copie TODO o conteúdo:

{
  "type": "...",
  "project_id": "...",
  ...
}

📌 6.2 Criar variável no Render

No painel do Render:

👉 Vá em Environment

Clique:
👉 Add Environment Variable

📌 Criar variável:

Key:

FIREBASE_CONFIG


Value:
👉 cole TODO o JSON (uma linha só)

📌 6.3 Ajustar firebase.js
const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://SEU-PROJETO.firebaseio.com"
});

const db = admin.database();

module.exports = db;

▶️ ETAPA 7 — FAZER DEPLOY

👉 Clique:
Create Web Service

⏳ Aguarde o build (1–3 minutos)

🌐 ETAPA 8 — ACESSAR

Render vai gerar uma URL:

https://seu-projeto.onrender.com

🔗 TESTES

Teste:

/
 /categorias
 /categorias/api

⚠️ ERROS MAIS COMUNS (IMPORTANTE PRA AULA)
❌ Cannot GET /

👉 Falta rota principal:

app.get("/", (req, res) => {
  res.render("index");
});

❌ Firebase error

👉 Verifique:

JSON correto

variável de ambiente

URL do database

❌ App crash

👉 Veja logs no Render:

Logs → erro detalhado

❌ Primeira demora

👉 Render gratuito “dorme”
(é normal demorar 30s)