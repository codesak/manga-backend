import express from "express";
import { getManga, postManga } from "../controllers/mangaChapters.js";

const router = express.Router();

router.post("/:mangaId", postManga);
router.get("/:mangaId", getManga);

export default router;