import { Router } from "express";
import { getSummary, getContact } from "../Controllers/metaController.js";

const router = Router();

router.get("/summary", getSummary);
router.get("/contact", getContact);

export default router;
