import express from "express";
import { createCollection, getCollectionById } from "../controllers/collectionController.js";

const router = express.Router();

router.post('/', createCollection);
router.get('/:id', getCollectionById);

export default router;
