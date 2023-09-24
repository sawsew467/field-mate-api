import express from "express";
import { createImage, getAllImages, getImageById } from "../controllers/imageController.js";

const router = express.Router();

router.post('/', createImage);
router.get('/all', getAllImages);
// router.get('/:id', getImageById);

export default router;
