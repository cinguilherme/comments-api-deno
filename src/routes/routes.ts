import { Router } from "https://deno.land/x/oak/mod.ts";
import { getCommentsForContent } from "../comments/controllers/comment.controller.ts";
import healthCheck from "../healthcheck/healthcheck.ts";

const router = new Router();

router.get("/health", healthCheck);

router.get("/api/v1/comment", getCommentsForContent);

export default router;
