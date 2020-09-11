const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const citaRoute = require('./routes/citaRoute');

require('dotenv').config();

//Crear el servidor
const app = express();
const port = process.env.PORT || 4000;

//Conectar DB
connectDB();

//Middleware
app.use(bodyParser.json());
app.use(cors());


//Rutas
app.use('/api', citaRoute);

//Ruta principal
app.get('/', (req, res) => {
     res.send('Hola ')
})

//Verificar puerto
app.listen(port, () => {
     console.log(`El servidor esta corriendo en el puerto ${port}`)
})