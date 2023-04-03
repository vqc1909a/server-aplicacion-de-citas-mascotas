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
//Se recomienda usar express.json() en vez de bodyParser.json() que es antiguo
app.use(express.json());
//estás permitiendo que cualquier origen (es decir, cualquier dominio) tenga acceso a tu servidor y pueda hacer solicitudes HTTP a tus endpoints.
app.use(cors());


//Rutas
app.use('/api', citaRoute);

//Ruta principal
app.get('/', (req, res) => {
     res.send('Hola')
})

//Verificar puerto
app.listen(port, () => {
     console.log(`El servidor esta corriendo en el puerto ${port}`)
})