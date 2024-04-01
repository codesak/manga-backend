import express from "express";
import { getBlogComments, postBlogComments } from "../controllers/blogComments.js";

const router = express.Router();

router.post("/comments/", postBlogComments);
router.get("/comments/:id", getBlogComments);

export default router;