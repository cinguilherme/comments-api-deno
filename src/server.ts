import { config } from "https://deno.land/x/dotenv/mod.ts";

import app from "./app.ts";

const HOST = config().HOST ?? "127.0.0.1";
const PORT = config().PORT ?? 3000;

console.log(`deno server is running on ${HOST} ${PORT}`);

await app.listen(`${HOST}:${PORT}`);
