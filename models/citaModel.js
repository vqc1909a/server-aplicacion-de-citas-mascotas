const mongoose = require('mongoose');

const CitaSchema  = mongoose.Schema({
     name: {
          type: String,
          required: true,
          trim: true
     },
     propietario: {
          type: String,
          required: true,
          trim: true
     },
     fecha: {
          type: Date,
          required: true,
          trim: true
     },
     hora: {
          type: String,
          required: true,
          trim: true
     },
     description: {
          type: String,
          required: true,
          trim: true
     }
},{
     timestamps: true,
});

const Cita = mongoose.model('Cita', CitaSchema);
module.exports = Cita;