import sequelize, { Sequelize } from 'sequelize';
import db from '../config/db.js';

// Se coloca un nombre a la variable del export y en el objeto db usamos el método define y le pasamos el nombre de la tabla y los campos
export const Testimonial = db.define('testimoniales', {
     nombre: {
          type: Sequelize.STRING
     },
     correo: {
          type: Sequelize.STRING
     },
     mensaje: {
          type: Sequelize.STRING
     }
});