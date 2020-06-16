import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./routes/routes.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// LOGGER
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(` ${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// healh/ping
app.use((ctx) => {
  ctx.response.body = "UP";
});

const HOST = config().HOST ?? "127.0.0.1";
const PORT = config().PORT ?? 3000;

console.log(`deno is running on ${HOST} ${PORT}`);

await app.listen(`${HOST}:${PORT}`);
