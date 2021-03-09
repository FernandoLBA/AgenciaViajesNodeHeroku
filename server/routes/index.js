import express from 'express';
import {
     paginaInicio, 
     paginaNosotros, 
     paginaTestimoniales, 
     paginaViajes, 
     paginaDetalleViaje
} from '../controllers/paginasController.js';
import {guardarTestimonial} from '../controllers/testimonialController.js';

const router = express.Router();

router.get('../server/views/', paginaInicio);

router.get('../server/views/nosotros', paginaNosotros);

router.get('../server/views/viajes', paginaViajes);

router.get('../server/views/viajes/:slug', paginaDetalleViaje);

router.get('../server/views/testimoniales', paginaTestimoniales);

router.post('../server/views/testimoniales', guardarTestimonial);

export default router;