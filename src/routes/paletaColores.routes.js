import { Router } from "express";
import { listarColores } from "../controllers/paletaColores.controllers";

const router = Router();

router.route("/tareas").get(listarColores);

export default router;
