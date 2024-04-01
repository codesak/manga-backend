import express from "express";
import { getMangaList } from "../controllers/mangaList";

const router = express.Router();

router.get("/mangaList", getMangaList);

export default router;