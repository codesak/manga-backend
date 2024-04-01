import express from "express";
import { blogComments } from "../controllers/blogComments.js";

const router = express.Router();

router.post("/comments/", blogComments);

export default router;