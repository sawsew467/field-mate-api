import express from "express";
import { createDisease, getDiseaseById } from "../controllers/diseaseController.js";

const router = express.Router();

router.post('/', createDisease);
router.get('/:id', getDiseaseById);

export default router;
