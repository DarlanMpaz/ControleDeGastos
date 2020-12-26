const express = require('express')
const database = require('../database/connection')

class SpentController {

    newSpent(req, res){

        const {quando, quanto, oque, onde, como} = req.body

        database.insert({quando, quanto, oque, onde, como}).table('gasto').then(idSpent=>{

            res.json({idSpent})

        }).catch(error=>{

            console.log(error)

        })
    }

    showSpent(req, res) {

        database.select('*').table('gasto').then(gastos=>{

            res.json(gastos)

        }).catch(error=>{

            console.log(error)

        })
    }

    showOneSpent(req, res) {

        const id = req.params.id

        database.select('*').table('gasto').where({id:id}).then(gasto=>{

            res.json(gasto)

        }).catch(error=>{

            console.log(error)

        })
    }

    updateSpent(req, res) {

        const id = req.params.id

        const {quando, quanto, oque, onde, como} = req.body

        database.where({id:id}).update({quando, quanto, oque, onde, como}).table('gasto').then(data=>{

            res.json({message:"Dados atualizados"})

        }).catch(error=>{

            res.json(error)

        })
    }

    removeSpent(req, res) {

        const id = req.params.id

        database.where({id:id}).del().table('gasto').then(data=>{

            res.json({message: 'Gasto removido'})

        }).catch(error=>{

            res.json(error)
            
        })
    }
}

module.exports = new SpentController()