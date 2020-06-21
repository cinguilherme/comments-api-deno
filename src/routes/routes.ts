import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getCommentsForContent,
  postComment,
  getById
} from "../comments/controllers/comment.controller.ts";
import healthCheck from "../healthcheck/healthcheck.ts";

const router = new Router();

router.get("/health", healthCheck);

router.get("/api/v1/comment/:id", getById);
router.get("/api/v1/comment", getCommentsForContent);
router.post("/api/v1/comment", postComment);

export default router;
