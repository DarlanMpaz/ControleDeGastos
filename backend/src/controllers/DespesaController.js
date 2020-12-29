const express = require('express')
const database = require('../database/connection')

class DespesaController {

    criarDespesa(req, res){

        const {descricao, valor, dataDespesa, tipo} = req.body

        database.insert({descricao, valor, dataDespesa, tipo}).table('despesa').then(idDespesa=>{

            res.json({idDespesa})

        }).catch(error=>{

            console.log(error)

        })
    }

    listarDespesas(req, res) {

        database.select('*').table('despesa').then(despesas=>{

            res.json(despesas)

        }).catch(error=>{

            console.log(error)

        })
    }

    listarUmaDespesa(req, res) {

        const id = req.params.id

        database.select('*').table('despesa').where({id:id}).then(despesa=>{

            res.json(despesa)

        }).catch(error=>{

            console.log(error)

        })
    }

    listarDespesaPorMes(req, res) {

        const {from, to} = req.body
        
        database.select('*').table('despesa').whereBetween('dataDespesa', [from, to]).then(resultado=>{

            res.json(resultado)

        }).catch(error=>{

            console.log(error)
            
        })

    }

    editarDespesa(req, res) {

        const id = req.params.id

        const {descricao, valor, dataDespesa, tipo} = req.body

        database.where({id:id}).update({descricao, valor, dataDespesa, tipo}).table('despesa').then(data=>{

            res.json({message:"Dados atualizados"})

        }).catch(error=>{

            res.json(error)

        })
    }

    removerDespesa(req, res) {

        const id = req.params.id

        database.where({id:id}).del().table('despesa').then(data=>{

            res.json({message: 'Despesa Removida'})

        }).catch(error=>{

            res.json(error)
            
        })
    }
}

module.exports = new DespesaController()