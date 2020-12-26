const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const SpentController = require('../controllers/SpentController')

router.post('/novoGasto', SpentController.newSpent)

router.get('/gastos', SpentController.showSpent)

router.get('/gasto/:id', SpentController.showOneSpent)

router.put('/atualizar/gasto/:id', SpentController.updateSpent)

router.delete('/delete/gasto/:id', SpentController.removeSpent)

module.exports = router