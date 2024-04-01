import express from "express";
import { blogComments } from "../controllers/blogComments.js";

const router = express.Router();

router.get("/comments/:id", blogComments);

export default router;