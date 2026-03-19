const db = require("../config/firebase");

// LISTAR
exports.listar = async (req, res) => {
    const snapshot = await db.ref("categorias").once("value");

    res.render("categorias/index", {
        categorias: snapshot.val() || {},
        categoria: null,
        titulo: "Categorias" // 🔥 evita erro no EJS
    });
};

// SALVAR
exports.salvar = async (req, res) => {
    const { nome, descricao } = req.body;

    const ref = db.ref("categorias").push();

    await ref.set({
        id: ref.key,
        nome,
        descricao
    });

    res.redirect("/categorias");
};

// EDITAR
exports.editar = async (req, res) => {
    const id = req.params.id;

    const cat = await db.ref("categorias/" + id).once("value");
    const all = await db.ref("categorias").once("value");

    res.render("categorias/index", {
        categorias: all.val() || {},
        categoria: cat.val() || null,
        titulo: "Editar Categoria"
    });
};

// ATUALIZAR
exports.atualizar = async (req, res) => {
    const id = req.params.id;
    const { nome, descricao } = req.body;

    await db.ref("categorias/" + id).update({
        nome,
        descricao
    });

    res.redirect("/categorias");
};

// EXCLUIR
exports.excluir = async (req, res) => {
    const id = req.params.id;

    await db.ref("categorias/" + id).remove();

    res.redirect("/categorias");
};
