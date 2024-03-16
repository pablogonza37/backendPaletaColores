import { Router } from "express";
import { borrarColor, crearColor, editarColor, listarColores, obtenerColor } from "../controllers/colores.controllers.js";

const router = Router();

router.route("/colores").get(listarColores).post(crearColor);
router.route('/colores/:id').get(obtenerColor).delete(borrarColor).put(editarColor);

export default router;
