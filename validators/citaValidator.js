const {check} = require('express-validator');

exports.citapost = [
     check('name').trim().notEmpty().withMessage('El nombre de la mascota es obligatorio'),
     check('propietario').trim().notEmpty().withMessage('El nombre del dueño es obligatorio'),
     check('fecha').trim().notEmpty().withMessage('La fecha es obligatoria').isDate().withMessage('Ingrese una fecha válida'),
     check('hora').trim().notEmpty().withMessage('Ingrese la hora por favor'),
     check('description').trim().notEmpty().withMessage('Ingrese sus síntomas de la mascota por favor')
]
