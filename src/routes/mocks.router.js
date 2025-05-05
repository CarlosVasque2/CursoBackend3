import { Router } from "express";
import mocksController from "../controllers/mocks.controller.js";
const router = Router();

router.get("/mockingpets", mocksController.crearMascotas);

export default router;