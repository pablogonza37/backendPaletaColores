import { Router } from "express";
import { listarColores } from "../controllers/paletaColores.controllers.js";

const router = Router();

router.route("/colores").get(listarColores);

export default router;
