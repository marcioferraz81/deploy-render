const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoriaController");

router.get("/", controller.listar);
router.post("/salvar", controller.salvar);
router.get("/editar/:id", controller.editar);
router.post("/atualizar/:id", controller.atualizar);
router.get("/excluir/:id", controller.excluir);

// 🔹 ROTA PARA MOBILE
router.get("/api", controller.apiListarMobile);

module.exports = router;
