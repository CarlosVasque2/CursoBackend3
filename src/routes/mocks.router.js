import { Router } from 'express';
import mocksController from '../controllers/mocks.controller.js';

const router = Router();

// Ruta para generar 50 usuarios fake
router.get('/mockingusers', mocksController.crearUsuariosMocking);

// Ruta para generar y guardar usuarios + mascotas (recibe users y pets por body)
router.post('/generateData', mocksController.generarYGuardarDatos);

// Ruta para generar 50 mascotas fake
router.get('/mockingpets', mocksController.crearMascotas);

export default router;

