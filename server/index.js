// requerimos express
import express from 'express';
// importamos router
import router from './routes/index.js'
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({path: 'variables.env'});

const app = express();

// Conectar a BD
db.authenticate()
     .then( () => console.log('Base de datos conectada') )
     .catch( error => console.log(error))

// Definir puerto
// const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual para el copyright
app.use((req, res, next) => {
     const year = new Date();

     res.locals.ActualYear = year.getFullYear();

     res.locals.NombreSitio = 'Agencia de Viajes';

     return next();
});

// Agregar bodyparser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta public
app.use(express.static('public'));

// Agregar Router
app.use('/', router);

// Arranca el servidor con el método .listen, le pasa el port y un callback para 
// app.listen(port, () => {
//      console.log(`El servidor está funcionando en el puerto: ${port}`)
// });

// Modificamos el código previo
// Puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

app.listen(port, host, () => {
     // Este mensaje deberá aparecer en el terminal de HEROKU, una vez subamos el proyecto
     console.log('Servidor HEROKU funcionando.');
});