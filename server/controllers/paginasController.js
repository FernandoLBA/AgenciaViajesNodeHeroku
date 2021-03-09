import { Viaje } from '../models/Viaje.js';
import {
     Testimonial
} from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => {
     // Consultar 3 viajes del modelo Viaje
     const promiseDB = [];

     // Esto hace que ambas consultas arranquen al mismo tiempo y se agreguen al arreglo promiseDB.
     promiseDB.push(Viaje.findAll({ limit: 3 }));
     promiseDB.push(Testimonial.findAll({ limit: 3 }));

     try {
          // cargará los resultados cuando ambas consultas estén listas
          const resultado = await Promise.all(promiseDB);

          res.render('inicio', {
               pagina: 'Inicio',
               clase: 'home',
               viajes: resultado[0],
               testimoniales: resultado[1]
          });
     } catch (error) {
          console.log(error);
     }
};

const paginaNosotros = (req, res) => {
     const viajes = 'Viaje a Alemania';

     res.render('Nosotros', {
          pagina: 'Nosotros'
     });
};

const paginaViajes = async (req, res) => {
     // Consultar base de datos
     const viajes = await Viaje.findAll();

     res.render('Viajes', {
          pagina: 'Próximos Viajes',
          viajes
     });
};

const paginaTestimoniales = async (req, res) => {
     // Envía los testimoniales a la vista
     try {
          const testimoniales = await Testimonial.findAll();

          res.render('Testimoniales', {
               pagina: 'Testimoniales',
               testimoniales
          });
     } catch (error) {
          console.log(error);
     }
};

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
     // Aplicamos destructuring a params
     const { slug } = req.params;

     try {
          const viaje = await Viaje.findOne({ where: { slug }});  
          
          res.render('Viaje', {
               pagina: 'Viaje',
               viaje
          });     
     } catch (error) {
          console.log(error);
     }
};

export {
     paginaInicio,
     paginaNosotros,
     paginaViajes,
     paginaTestimoniales,
     paginaDetalleViaje
};