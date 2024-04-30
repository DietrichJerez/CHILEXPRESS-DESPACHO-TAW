import { Router } from "express";
import { ConsultOrder } from "../controllers/despacho.controllers.js";

const router = Router()

router.get("/consulta-Orden", ConsultOrder)



export default router

