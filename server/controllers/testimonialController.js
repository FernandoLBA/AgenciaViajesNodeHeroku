import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
     // destructuring del objet req.body
     const { nombre, correo, mensaje } = req.body;

     // Validar formulario
     const errores = [];

     if (nombre.trim() === '') {
          errores.push({mensaje: 'Nombre no puede estar vacío'});
     };

     if (correo.trim() === '') {
          errores.push({mensaje: 'Correo no puede estar vacío'});
     };

     if (mensaje.trim() === '') {
          errores.push({mensaje: 'Mensaje no puede estar vacío'});
     };

     // Si hay errores
     if (errores.length > 0) {
          // Consultar a la base de datos
          const testimoniales = await Testimonial.findAll();
          // Mostrar la vista con errores
          res.render('testimoniales', {
               pagina: 'Testimoniales',
               errores, 
               nombre,
               correo,
               mensaje,
               testimoniales
          });

     } else {
          // Almacenarlo en la base de datos
          try {
               await Testimonial.create({
                    nombre,
                    correo,
                    mensaje
               });
               
               // Consultar a la base de datos
               const testimoniales = await Testimonial.findAll();
               res.render('testimoniales', {
                    pagina: 'Testimoniales',
                    confirmacion: '¡Testimonial registrado exitosamente!',
                    testimoniales
               });

               // una vez guardados los datos, redirige al usuario a la página testimoniales
               res.redirect('/testimoniales');
          } catch (error) {
               console.log(error);
          };
     };
};

export {
     guardarTestimonial
};