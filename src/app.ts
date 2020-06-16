import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./routes/routes.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const HOST = config().HOST ?? "127.0.0.1";
const PORT = config().PORT ?? 8000;

console.log(`deno is running on ${HOST} ${PORT}`);

const host = app.use((ctx) => {
  ctx.response.body = "Hello";
});

await app.listen(`${HOST}:${PORT}`);
