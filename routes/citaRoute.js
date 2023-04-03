const express = require('express');
const Router = express.Router();
const Cita = require('../models/citaModel');
const {citapost, citaput} = require('../validators/citaValidator');
const {validationResult} = require('express-validator');
Router.post('/citas', citapost, async(req, res) => {
     try{
          const errors = validationResult(req);
          if(errors.errors.length !== 0){
               return res.status(404).json({message: errors.array()[0].msg})
          }
          const cita = new Cita(req.body);
          const citaSaved = await cita.save();

          return res.status(200).json({message: "Cita agregada", body: citaSaved})
     }catch(err){
          return res.status(404).json({message: err.message})
     }
})
Router.get('/citas', async (req, res) => {
     try{
          const citas = await Cita.find({}).sort({fecha: 1, hora: 1});    
          return res.status(200).json({message: citas});
     }catch(err){
         return res.status(404).json({message: err.message});
     }
})
Router.delete('/citas/:id', async (req,res) => {
     try{
          await Cita.deleteOne({_id: req.params.id});
          res.status(200).json({message: "Cita eliminada"});
     }catch(err){
          return res.status(404).json({message: err.message});
     }
})
Router.put('/citas/:id', citaput, async (req, res) => {
     try{
           const errors = validationResult(req);
           if (errors.errors.length !== 0) {
             return res.status(404).json({ message: errors.array()[0].msg });
           }
          await Cita.updateOne({_id : req.params.id}, req.body);
          return res.status(200).json({message: "Cita Actualizada"});
     }catch(err){
          return res.status(404).json({message: err.message});
     }
})
module.exports = Router;