const express = require('express');
const Router = express.Router();
const Cita = require('../models/citaModel');
const {citapost} = require('../validators/citaValidator');
const {validationResult} = require('express-validator');
Router.post('/', citapost, async(req, res) => {
     try{
          const errors = validationResult(req);
          if(errors.errors.length !== 0){
               return res.status(404).json({message: errors.array()[0].msg})
          }
          const cita = new Cita(req.body);
          const citaSaved = await cita.save();

          return res.status(200).json({message: citaSaved})
     }catch(err){
          return res.status(404).json({messager: err.message})
     }
})
module.exports = Router;