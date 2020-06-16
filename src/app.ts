import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./routes/routes.ts";
import logger from "./middleware/logger.ts";
import timer from "./middleware/timer.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.use(logger);
app.use(timer);

// healh/ping
app.use((ctx) => {
  ctx.response.body = "UP";
});

const HOST = config().HOST ?? "127.0.0.1";
const PORT = config().PORT ?? 3000;

console.log(`deno is running on ${HOST} ${PORT}`);

await app.listen(`${HOST}:${PORT}`);
