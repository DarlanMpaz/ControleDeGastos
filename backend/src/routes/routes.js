const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const DespesaController = require('../controllers/DespesaController')

router.post('/nova-despesa', DespesaController.criarDespesa)

router.get('/despesas', DespesaController.listarDespesas)

router.get('/despesa/:id', DespesaController.listarUmaDespesa)

router.put('/editar/despesa/:id', DespesaController.editarDespesa)

router.delete('/remover/despesa/:id', DespesaController.removerDespesa)

router.get('/despesas-mes', DespesaController.listarDespesaPorMes)

module.exports = router